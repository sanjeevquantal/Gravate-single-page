from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, schemas
from ..database import get_db

router = APIRouter()

@router.post("/matches/", response_model=schemas.MatchResponse, status_code=201)
def create_match(match: schemas.MatchCreate, db: Session = Depends(get_db)):
    """
    Create a new match
    """
    try:
        db_match = crud.create_match(db=db, match=match)
        return db_match
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create match: {str(e)}")

@router.get("/matches/", response_model=List[schemas.MatchResponse])
def get_matches(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Retrieve all matches with optional pagination
    """
    matches = crud.get_matches(db, skip=skip, limit=limit)
    return matches

@router.get("/matches/{match_id}", response_model=schemas.MatchResponse)
def get_match(match_id: int, db: Session = Depends(get_db)):
    """
    Retrieve a specific match by ID
    """
    match = crud.get_match(db, match_id=match_id)
    if match is None:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@router.put("/matches/{match_id}/score", response_model=schemas.MatchResponse)
def update_match_score(match_id: int, score_update: schemas.ScoreUpdate, db: Session = Depends(get_db)):
    """
    Update the score for a match in progress
    """
    match = crud.update_match_score(db, match_id=match_id, score_update=score_update)
    if match is None:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@router.put("/matches/{match_id}/complete", response_model=schemas.MatchResponse)
def complete_match(match_id: int, db: Session = Depends(get_db)):
    """
    Mark a match as completed
    """
    match = crud.complete_match(db, match_id=match_id)
    if match is None:
        raise HTTPException(status_code=404, detail="Match not found")
    return match