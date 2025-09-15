@echo off
echo Starting Scoresheet Backend API...
echo.

REM Check if virtual environment exists
if not exist "venv\Scripts\activate.bat" (
    echo ERROR: Virtual environment not found!
    echo Please run setup.bat first to create the virtual environment.
    echo.
    echo This will:
    echo 1. Create a virtual environment
    echo 2. Install all dependencies
    echo 3. Set up the project properly
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
echo Make sure you have:
echo 1. PostgreSQL running and configured in .env file
echo 2. Database created (pickleball_tournament_db)
echo.
echo Starting server on http://localhost:8000
echo.
python run.py
pause
