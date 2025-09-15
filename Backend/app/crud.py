from sqlalchemy.orm import Session
from . import models, schemas
from typing import List, Optional
import json

def create_match(db: Session, match: schemas.MatchCreate) -> models.Match:
    db_match = models.Match(**match.dict())
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match

def get_matches(db: Session, skip: int = 0, limit: int = 100) -> List[models.Match]:
    return db.query(models.Match).offset(skip).limit(limit).all()

def get_match(db: Session, match_id: int) -> models.Match:
    return db.query(models.Match).filter(models.Match.id == match_id).first()

def update_match_score(db: Session, match_id: int, score_update: schemas.ScoreUpdate) -> Optional[models.Match]:
    db_match = db.query(models.Match).filter(models.Match.id == match_id).first()
    if not db_match:
        return None
    
    # Initialize current_score if it doesn't exist
    if not hasattr(db_match, 'current_score') or not db_match.current_score:
        db_match.current_score = {
            "team1": 0,
            "team2": 0,
            "sets": []
        }
    
    # Update current set scores
    db_match.current_score["team1"] = score_update.team1_score
    db_match.current_score["team2"] = score_update.team2_score
    
    # Check if set is complete (first to 21, win by 2)
    if (score_update.team1_score >= 21 or score_update.team2_score >= 21) and \
       abs(score_update.team1_score - score_update.team2_score) >= 2:
        # Add completed set to sets array
        set_result = {
            "team1": score_update.team1_score,
            "team2": score_update.team2_score,
            "set_number": score_update.set_number
        }
        db_match.current_score["sets"].append(set_result)
        
        # Reset current scores for next set
        db_match.current_score["team1"] = 0
        db_match.current_score["team2"] = 0
    
    # Update scorecard with current state
    if db_match.current_score["sets"]:
        set_scores = [f"{s['team1']}-{s['team2']}" for s in db_match.current_score["sets"]]
        current_set = f"{db_match.current_score['team1']}-{db_match.current_score['team2']}"
        db_match.scorecard = ", ".join(set_scores) + f" (Current: {current_set})"
    else:
        db_match.scorecard = f"{db_match.current_score['team1']}-{db_match.current_score['team2']}"
    
    db.commit()
    db.refresh(db_match)
    return db_match

def complete_match(db: Session, match_id: int) -> Optional[models.Match]:
    db_match = db.query(models.Match).filter(models.Match.id == match_id).first()
    if not db_match:
        return None
    
    db_match.status = models.MatchStatus.COMPLETED
    
    # Finalize scorecard
    if hasattr(db_match, 'current_score') and db_match.current_score and db_match.current_score["sets"]:
        set_scores = [f"{s['team1']}-{s['team2']}" for s in db_match.current_score["sets"]]
        db_match.scorecard = ", ".join(set_scores)
    
    db.commit()
    db.refresh(db_match)
    return db_match
for the 