@echo off
echo Stopping Scoresheet Backend Docker services...
echo.

REM Stop and remove containers
docker-compose down

if errorlevel 1 (
    echo ERROR: Failed to stop services
    pause
    exit /b 1
)

echo.
echo ✅ Services stopped successfully!
echo.
echo To start again: docker-start.bat
echo To remove volumes (WARNING: deletes data): docker-compose down -v
echo.
pause
