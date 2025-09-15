from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlalchemy.orm import Session
from typing import List
from services.match_service import MatchService
from schemas.match import MatchCreate, MatchResponse, ScoreUpdate
from core.database import get_db
import json

router = APIRouter()

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

@router.post("/matches/", response_model=MatchResponse, status_code=201)
def create_match(match: MatchCreate, db: Session = Depends(get_db)):
    """
    Create a new match
    """
    try:
        db_match = MatchService.create_match(db=db, match=match)
        return db_match
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create match: {str(e)}")

@router.get("/matches/", response_model=List[MatchResponse])
def get_matches(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Retrieve all matches with optional pagination
    """
    matches = MatchService.get_matches(db, skip=skip, limit=limit)
    return matches

@router.get("/matches/{match_id}", response_model=MatchResponse)
def get_match(match_id: int, db: Session = Depends(get_db)):
    """
    Retrieve a specific match by ID
    """
    match = MatchService.get_match(db, match_id=match_id)
    if match is None:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@router.put("/matches/{match_id}/score", response_model=MatchResponse)
def update_match_score(match_id: int, score_update: ScoreUpdate, db: Session = Depends(get_db)):
    """
    Update the score for a match in progress
    """
    match = MatchService.update_match_score(db, match_id=match_id, score_update=score_update)
    if match is None:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@router.put("/matches/{match_id}/complete", response_model=MatchResponse)
def complete_match(match_id: int, db: Session = Depends(get_db)):
    """
    Mark a match as completed
    """
    match = MatchService.complete_match(db, match_id=match_id)
    if match is None:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@router.websocket("/ws/{match_id}")
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
