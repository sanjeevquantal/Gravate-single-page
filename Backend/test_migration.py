#!/usr/bin/env python3
"""
Test script to verify the migration from old architecture to new architecture
"""

import sys
import os

# Add the project root to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

def test_imports():
    """Test that all imports work correctly"""
    try:
        # Test model imports
        from models.match import Match, MatchStatus
        print("✓ Models imported successfully")
        
        # Test schema imports
        from schemas.match import MatchCreate, MatchResponse, ScoreUpdate
        print("✓ Schemas imported successfully")
        
        # Test service imports
        from services.match_service import MatchService
        print("✓ Services imported successfully")
        
        # Test route imports
        from routes.match import router
        print("✓ Routes imported successfully")
        
        # Test core imports
        from core.database import get_db, engine, Base
        print("✓ Core database imported successfully")
        
        print("\n🎉 All imports successful! Migration completed successfully.")
        return True
        
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def test_model_creation():
    """Test that models can be created"""
    try:
        from models.match import Match, MatchStatus
        
        # Test enum values
        assert MatchStatus.SCHEDULED == "scheduled"
        assert MatchStatus.IN_PROGRESS == "in-progress"
        assert MatchStatus.COMPLETED == "completed"
        assert MatchStatus.CANCELLED == "cancelled"
        
        print("✓ Model enums working correctly")
        return True
        
    except Exception as e:
        print(f"❌ Model creation error: {e}")
        return False

def test_schema_creation():
    """Test that schemas can be created"""
    try:
        from schemas.match import MatchCreate, MatchResponse, ScoreUpdate
        from models.match import MatchStatus
        
        # Test schema creation
        match_create = MatchCreate(
            team1="Team A",
            team2="Team B",
            scorecard="0-0",
            status=MatchStatus.SCHEDULED,
            date="2024-01-01",
            time="10:00"
        )
        
        score_update = ScoreUpdate(
            team1_score=21,
            team2_score=19,
            set_number=1
        )
        
        print("✓ Schemas created successfully")
        return True
        
    except Exception as e:
        print(f"❌ Schema creation error: {e}")
        return False

if __name__ == "__main__":
    print("Testing migration from old architecture to new architecture...\n")
    
    success = True
    success &= test_imports()
    success &= test_model_creation()
    success &= test_schema_creation()
    
    if success:
        print("\n🎉 All tests passed! Migration is successful.")
        sys.exit(0)
    else:
        print("\n❌ Some tests failed. Please check the errors above.")
        sys.exit(1)
