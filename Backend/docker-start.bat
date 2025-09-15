@echo off
echo Starting Scoresheet Backend with Docker...
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not installed or not in PATH
    echo Please install Docker Desktop from https://docker.com
    pause
    exit /b 1
)

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not running
    echo Please start Docker Desktop and try again
    pause
    exit /b 1
)

echo Docker found and running!
echo.

REM Build and start services
echo Building and starting services...
docker-compose up --build -d

if errorlevel 1 (
    echo ERROR: Failed to start services
    pause
    exit /b 1
)

echo.
echo ✅ Services started successfully!
echo.
echo Backend API: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo PostgreSQL: localhost:5432
echo.
echo To view logs: docker-compose logs -f
echo To stop services: docker-compose down
echo.
pause
