#!/usr/bin/env python3
"""
Script to list all available API endpoints
Run this to see all endpoints without starting the server
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.main import app
from fastapi.routing import APIRoute

def list_endpoints():
    """List all available API endpoints"""
    
    print("🔗 Available API Endpoints")
    print("=" * 60)
    
    # Get all routes
    routes = []
    for route in app.routes:
        if isinstance(route, APIRoute):
            routes.append(route)
    
    # Sort routes by path
    routes.sort(key=lambda x: x.path)
    
    print(f"Found {len(routes)} endpoints:\n")
    
    for route in routes:
        methods = ", ".join(route.methods)
        print(f"📍 {route.path}")
        print(f"   Methods: {methods}")
        print(f"   Name: {route.name}")
        if route.summary:
            print(f"   Summary: {route.summary}")
        print()
    
    print("=" * 60)
    print("🌐 Access Points:")
    print("   • Interactive Docs: http://localhost:8000/docs")
    print("   • ReDoc: http://localhost:8000/redoc")
    print("   • Health Check: http://localhost:8000/health")
    print("   • Root: http://localhost:8000/")
    print()
    print("📋 Endpoint Categories:")
    print("   • Health & Status: /, /health")
    print("   • Match Management: /api/v1/matches/")
    print("   • WebSocket: /ws/{match_id}")
    print("   • Documentation: /docs, /redoc")

def show_endpoint_details():
    """Show detailed information about specific endpoints"""
    
    print("\n📖 Detailed Endpoint Information")
    print("=" * 60)
    
    # Match endpoints
    print("🏓 Match Management Endpoints:")
    print()
    
    print("1. GET /api/v1/matches/")
    print("   • Description: Get all matches")
    print("   • Parameters: skip (int), limit (int)")
    print("   • Response: List of matches")
    print()
    
    print("2. POST /api/v1/matches/")
    print("   • Description: Create a new match")
    print("   • Body: MatchCreate schema")
    print("   • Response: Created match")
    print()
    
    print("3. GET /api/v1/matches/{match_id}")
    print("   • Description: Get specific match by ID")
    print("   • Parameters: match_id (int)")
    print("   • Response: Match details")
    print()
    
    print("4. PUT /api/v1/matches/{match_id}/score")
    print("   • Description: Update match score")
    print("   • Body: ScoreUpdate schema")
    print("   • Response: Updated match")
    print()
    
    print("5. PUT /api/v1/matches/{match_id}/complete")
    print("   • Description: Mark match as completed")
    print("   • Response: Completed match")
    print()
    
    print("🔌 WebSocket Endpoints:")
    print()
    print("6. WS /ws/{match_id}")
    print("   • Description: Real-time score updates")
    print("   • Parameters: match_id (int)")
    print("   • Usage: Connect for live scoring")
    print()

def show_data_schemas():
    """Show data schemas for requests/responses"""
    
    print("\n📊 Data Schemas")
    print("=" * 60)
    
    print("🏓 MatchCreate Schema:")
    print("   {")
    print("     'team1': 'string',           # Team 1 name")
    print("     'team2': 'string',           # Team 2 name")
    print("     'scorecard': 'string',       # Score display")
    print("     'status': 'scheduled|in-progress|completed|cancelled',")
    print("     'date': 'string',            # YYYY-MM-DD format")
    print("     'time': 'string',            # HH:MM format")
    print("     'notes': 'string'            # Optional notes")
    print("   }")
    print()
    
    print("⚽ ScoreUpdate Schema:")
    print("   {")
    print("     'team1_score': 'integer',    # Team 1 current score")
    print("     'team2_score': 'integer',    # Team 2 current score")
    print("     'set_number': 'integer'      # Current set number")
    print("   }")
    print()
    
    print("📋 MatchResponse Schema:")
    print("   {")
    print("     'id': 'integer',")
    print("     'team1': 'string',")
    print("     'team2': 'string',")
    print("     'scorecard': 'string',")
    print("     'status': 'string',")
    print("     'date': 'string',")
    print("     'time': 'string',")
    print("     'notes': 'string',")
    print("     'current_score': 'object',   # Real-time scoring data")
    print("     'created_at': 'datetime',")
    print("     'updated_at': 'datetime'")
    print("   }")

if __name__ == "__main__":
    print("🚀 Backend API Endpoint Explorer")
    print("=" * 60)
    
    try:
        list_endpoints()
        show_endpoint_details()
        show_data_schemas()
        
        print("\n✅ Endpoint exploration completed!")
        print("\n💡 Tips:")
        print("   • Start the backend to test endpoints")
        print("   • Use /docs for interactive testing")
        print("   • Use /redoc for detailed documentation")
        print("   • Check test_backend.py for examples")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("Make sure you're in the Backend directory")
        sys.exit(1)
