@echo off
echo Starting Scoresheet Backend in Development Mode (with venv)...
echo.

REM Check if virtual environment exists
if not exist "venv\Scripts\activate.bat" (
    echo ERROR: Virtual environment not found!
    echo Please run setup.bat first to create the virtual environment.
    echo.
    pause
    exit /b 1
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat
if errorlevel 1 (
    echo ERROR: Failed to activate virtual environment
    pause
    exit /b 1
)

echo Virtual environment activated!
echo.

REM Check if PostgreSQL is running (optional check)
echo Checking database connection...
python -c "import psycopg2; psycopg2.connect('postgresql://postgres:root@localhost:5432/pickleball_tournament_db')" 2>nul
if errorlevel 1 (
    echo WARNING: Cannot connect to PostgreSQL
    echo Make sure PostgreSQL is running on localhost:5432
    echo Database: pickleball_tournament_db, User: postgres, Password: root
    echo.
)

echo Starting development server...
echo Backend will be available at: http://localhost:8000
echo API Documentation: http://localhost:8000/docs
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
python run.py
