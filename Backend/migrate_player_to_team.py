#!/usr/bin/env python3
"""
Database migration script to update existing matches from player vs player to team vs team.
This script renames the player1 and player2 columns to team1 and team2.
"""

import os
import sys
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def migrate_database():
    """Migrate the database from player vs player to team vs team."""
    
    # Get database URL
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:root@localhost:5432/pickleball_tournament_db")
    
    print("Starting migration from player vs player to team vs team...")
    print(f"Database URL: {DATABASE_URL}")
    
    try:
        # Create database engine
        engine = create_engine(DATABASE_URL)
        
        with engine.connect() as connection:
            # Start transaction
            trans = connection.begin()
            
            try:
                # Check if columns exist
                result = connection.execute(text("""
                    SELECT column_name 
                    FROM information_schema.columns 
                    WHERE table_name = 'matches' 
                    AND column_name IN ('player1', 'player2', 'team1', 'team2')
                """))
                
                existing_columns = [row[0] for row in result.fetchall()]
                print(f"Existing columns: {existing_columns}")
                
                # If player1/player2 exist and team1/team2 don't, rename them
                if 'player1' in existing_columns and 'player2' in existing_columns and 'team1' not in existing_columns:
                    print("Renaming player1 to team1...")
                    connection.execute(text("ALTER TABLE matches RENAME COLUMN player1 TO team1"))
                    
                    print("Renaming player2 to team2...")
                    connection.execute(text("ALTER TABLE matches RENAME COLUMN player2 TO team2"))
                    
                    print("✅ Successfully renamed columns from player1/player2 to team1/team2")
                    
                elif 'team1' in existing_columns and 'team2' in existing_columns:
                    print("✅ Columns already renamed to team1/team2")
                    
                else:
                    print("⚠️  Unexpected column state. Please check your database schema.")
                    return False
                
                # Update current_score JSON structure if it exists
                print("Updating current_score JSON structure...")
                connection.execute(text("""
                    UPDATE matches 
                    SET current_score = jsonb_set(
                        jsonb_set(
                            current_score, 
                            '{team1}', 
                            (current_score->>'player1')::jsonb
                        ),
                        '{team2}', 
                        (current_score->>'player2')::jsonb
                    )
                    WHERE current_score IS NOT NULL 
                    AND current_score ? 'player1' 
                    AND current_score ? 'player2'
                """))
                
                # Update sets array in current_score
                connection.execute(text("""
                    UPDATE matches 
                    SET current_score = jsonb_set(
                        current_score,
                        '{sets}',
                        (
                            SELECT jsonb_agg(
                                jsonb_set(
                                    jsonb_set(
                                        jsonb_set(
                                            value,
                                            '{team1}',
                                            (value->>'player1')::jsonb
                                        ),
                                        '{team2}',
                                        (value->>'player2')::jsonb
                                    ),
                                    '{set_number}',
                                    value->'set_number'
                                )
                            )
                            FROM jsonb_array_elements(current_score->'sets')
                        )
                    )
                    WHERE current_score IS NOT NULL 
                    AND current_score ? 'sets'
                    AND jsonb_array_length(current_score->'sets') > 0
                """))
                
                # Remove old player1/player2 keys from current_score
                connection.execute(text("""
                    UPDATE matches 
                    SET current_score = current_score - 'player1' - 'player2'
                    WHERE current_score IS NOT NULL
                """))
                
                print("✅ Successfully updated current_score JSON structure")
                
                # Commit transaction
                trans.commit()
                print("✅ Migration completed successfully!")
                
                # Verify migration
                result = connection.execute(text("""
                    SELECT id, team1, team2, current_score 
                    FROM matches 
                    LIMIT 3
                """))
                
                print("\nSample migrated data:")
                for row in result.fetchall():
                    print(f"ID: {row[0]}, Team1: {row[1]}, Team2: {row[2]}, Current Score: {row[3]}")
                
                return True
                
            except Exception as e:
                # Rollback on error
                trans.rollback()
                print(f"❌ Error during migration: {str(e)}")
                return False
                
    except Exception as e:
        print(f"❌ Database connection error: {str(e)}")
        return False

if __name__ == "__main__":
    print("=" * 60)
    print("DATABASE MIGRATION: Player vs Player → Team vs Team")
    print("=" * 60)
    
    success = migrate_database()
    
    if success:
        print("\n🎉 Migration completed successfully!")
        print("Your database now uses team1/team2 instead of player1/player2")
    else:
        print("\n💥 Migration failed!")
        print("Please check the error messages above and try again")
        sys.exit(1)
