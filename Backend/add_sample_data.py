#!/usr/bin/env python3
"""
Script to add sample match data to the database for testing
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal, engine
from app import models, schemas
from app.models import MatchStatus

def add_sample_data():
    """Add sample match data to the database"""
    db = SessionLocal()
    
    try:
        # Check if we already have data
        existing_matches = db.query(models.Match).count()
        if existing_matches > 0:
            print(f"Database already has {existing_matches} matches. Skipping sample data creation.")
            return
        
        # Sample match data
        sample_matches = [
            {
                "team1": "HDFC ERGO Eagles",
                "team2": "Tata Digital Tigers", 
                "scorecard": "21-19, 18-21, 21-16",
                "status": MatchStatus.COMPLETED,
                "date": "2025-09-26",
                "time": "16:30",
                "notes": "Quarter-final match"
            },
            {
                "team1": "ICICI Warriors",
                "team2": "Barclays Bulldogs",
                "scorecard": "21-15, 19-21, 21-18", 
                "status": MatchStatus.COMPLETED,
                "date": "2025-09-26",
                "time": "15:00",
                "notes": "Group stage match"
            },
            {
                "team1": "Hitachi Hawks",
                "team2": "WNS Wolves",
                "scorecard": "TBD",
                "status": MatchStatus.SCHEDULED,
                "date": "2025-09-27", 
                "time": "14:00",
                "notes": "Semi-final match"
            },
            {
                "team1": "Adani Aces",
                "team2": "DSK Dynamos",
                "scorecard": "TBD",
                "status": MatchStatus.SCHEDULED,
                "date": "2025-09-27",
                "time": "15:30", 
                "notes": "Consolation match"
            },
            {
                "team1": "Hiranandani Heroes",
                "team2": "Premier League Panthers",
                "scorecard": "18-21, 21-19, 19-21",
                "status": MatchStatus.COMPLETED,
                "date": "2025-09-25",
                "time": "17:00",
                "notes": "Opening match"
            }
        ]
        
        # Create matches
        for match_data in sample_matches:
            match = schemas.MatchCreate(**match_data)
            db_match = models.Match(**match.dict())
            db.add(db_match)
        
        db.commit()
        print(f"Successfully added {len(sample_matches)} sample matches to the database!")
        
    except Exception as e:
        print(f"Error adding sample data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    print("Adding sample match data to the database...")
    add_sample_data()
    print("Done!")





