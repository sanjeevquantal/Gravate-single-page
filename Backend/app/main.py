from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from .api.endpoints import router
from .database import engine
from . import models
import json
from typing import List

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Scoresheet API",
    description="Backend API for Sports League Manager",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://localhost:8080", "http://localhost:8081"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# WebSocket connection manager
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            try:
                await connection.send_text(message)
            except:
                # Remove disconnected connections
                self.active_connections.remove(connection)

manager = ConnectionManager()

# Include API routes
app.include_router(router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Welcome to Scoresheet API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.websocket("/ws/{match_id}")
async def websocket_endpoint(websocket: WebSocket, match_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Echo back the message to all connected clients for this match
            await manager.broadcast(json.dumps({
                "type": "score_update",
                "match_id": match_id,
                "data": json.loads(data)
            }))
    except WebSocketDisconnect:
        manager.disconnect(websocket)
