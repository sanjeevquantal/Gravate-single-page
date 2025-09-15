from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from routes.match import router as match_router

from core.database import engine
from models import match
import time
import logging
from core.config_loader import settings

openapi_tags = [
    {
    "name": "Matches",
    "description": "Match management and scoring operations",
    },
]

app = FastAPI(openapi_tags=openapi_tags)

if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            str(origin).strip("/") for origin in settings.BACKEND_CORS_ORIGINS
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(match_router, prefix='/api/v1')

@app.get("/health", tags=['Health Checks'])
def read_root():
    return {"health": "true"}

