@echo off
echo Setting up Scoresheet Backend API with Virtual Environment...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3.8+ from https://python.org
    pause
    exit /b 1
)

REM Check Python version
for /f "tokens=2" %%i in ('python --version 2^>^&1') do set PYTHON_VERSION=%%i
echo Found Python version: %PYTHON_VERSION%
echo Recommended: Python 3.8+ (current project supports 3.8+)
echo.

echo Python found. Creating virtual environment...
echo.

REM Create virtual environment
python -m venv venv
if errorlevel 1 (
    echo ERROR: Failed to create virtual environment
    pause
    exit /b 1
)

echo Virtual environment created successfully!
echo.

REM Activate virtual environment and install dependencies
echo Activating virtual environment and installing dependencies...
call venv\Scripts\activate.bat
if errorlevel 1 (
    echo ERROR: Failed to activate virtual environment
    pause
    exit /b 1
)

echo Installing dependencies from requirements.txt...
pip install --upgrade pip
pip install -r requirements.txt
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Setup completed successfully!
echo.
echo Available requirements files:
echo - requirements.txt      (main dependencies - installed)
echo - requirements-dev.txt  (development tools)
echo - requirements-prod.txt (production minimal)
echo - requirements-docker.txt (Docker optimized)
echo.
echo To install development tools:
echo pip install -r requirements-dev.txt
echo.
echo To start the application:
echo 1. Run dev-start.bat for development mode
echo 2. Run start.bat for production mode
echo 3. Run docker-start.bat for Docker mode
echo.
pause
