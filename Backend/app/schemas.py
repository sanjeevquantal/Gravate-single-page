from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from datetime import datetime
from .models import MatchStatus

class MatchCreate(BaseModel):
    team1: str
    team2: str
    scorecard: str
    status: MatchStatus = MatchStatus.SCHEDULED
    date: str
    time: str
    notes: Optional[str] = None

class ScoreUpdate(BaseModel):
    team1_score: int
    team2_score: int
    set_number: int = 1

class MatchResponse(BaseModel):
    id: int
    team1: str
    team2: str
    scorecard: str
    status: MatchStatus
    date: str
    time: str
    notes: Optional[str] = None
    current_score: Optional[Dict[str, Any]] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
