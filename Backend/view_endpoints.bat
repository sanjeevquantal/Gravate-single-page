@echo off
echo API Endpoints Viewer
echo ====================
echo.

echo Current Backend Endpoints:
echo.

echo 🌐 Web Interface (when backend is running):
echo    • Interactive Docs: http://localhost:8000/docs
echo    • ReDoc: http://localhost:8000/redoc
echo    • Health Check: http://localhost:8000/health
echo.

echo 📋 REST API Endpoints:
echo.

echo 1. Health & Status:
echo    GET  /                    - Welcome message
echo    GET  /health              - Health check
echo.

echo 2. Match Management:
echo    GET    /api/v1/matches/           - Get all matches
echo    POST   /api/v1/matches/           - Create new match
echo    GET    /api/v1/matches/{id}       - Get specific match
echo    PUT    /api/v1/matches/{id}/score - Update match score
echo    PUT    /api/v1/matches/{id}/complete - Complete match
echo.

echo 3. WebSocket:
echo    WS     /ws/{match_id}     - Real-time score updates
echo.

echo 📊 Data Schemas:
echo.

echo MatchCreate (POST /api/v1/matches/):
echo {
echo   "team1": "Team A",
echo   "team2": "Team B", 
echo   "scorecard": "0-0",
echo   "status": "scheduled",
echo   "date": "2025-01-01",
echo   "time": "12:00",
echo   "notes": "Optional notes"
echo }
echo.

echo ScoreUpdate (PUT /api/v1/matches/{id}/score):
echo {
echo   "team1_score": 15,
echo   "team2_score": 12,
echo   "set_number": 1
echo }
echo.

echo 🧪 Testing:
echo    • Run: python test_backend.py
echo    • Visit: http://localhost:8000/docs
echo    • Use curl or Postman for API calls
echo.

echo 📖 For detailed documentation:
echo    • Start backend: docker-start.bat or dev-start.bat
echo    • Visit: http://localhost:8000/docs
echo.

pause
