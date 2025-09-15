@echo off
echo Verifying Backend Setup...
echo ================================
echo.

REM Check if Python is available
echo 1. Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    echo    ❌ Python not found! Please install Python 3.8+
    goto :error
) else (
    echo    ✅ Python found
)

REM Check if virtual environment exists
echo.
echo 2. Checking virtual environment...
if exist "venv\Scripts\activate.bat" (
    echo    ✅ Virtual environment exists
) else (
    echo    ⚠️  Virtual environment not found
    echo    Run: setup.bat to create it
)

REM Check if Docker is available
echo.
echo 3. Checking Docker installation...
docker --version >nul 2>&1
if errorlevel 1 (
    echo    ❌ Docker not found! Install Docker Desktop
    echo    Download from: https://docker.com
) else (
    echo    ✅ Docker found
    docker --version
)

REM Check if .env file exists
echo.
echo 4. Checking environment configuration...
if exist ".env" (
    echo    ✅ .env file exists
) else (
    echo    ⚠️  .env file not found
    echo    Copy env.example to .env and configure it
)

REM Check if requirements files exist
echo.
echo 5. Checking requirements files...
if exist "requirements.txt" (
    echo    ✅ requirements.txt exists
) else (
    echo    ❌ requirements.txt missing!
    goto :error
)

if exist "requirements-docker.txt" (
    echo    ✅ requirements-docker.txt exists
) else (
    echo    ❌ requirements-docker.txt missing!
    goto :error
)

REM Check if Docker Compose file exists
echo.
echo 6. Checking Docker configuration...
if exist "docker-compose.yml" (
    echo    ✅ docker-compose.yml exists
) else (
    echo    ❌ docker-compose.yml missing!
    goto :error
)

if exist "Dockerfile" (
    echo    ✅ Dockerfile exists
) else (
    echo    ❌ Dockerfile missing!
    goto :error
)

echo.
echo ================================
echo ✅ Setup verification completed!
echo.
echo Next steps:
echo 1. For Docker: Run docker-start.bat
echo 2. For venv: Run setup.bat then dev-start.bat
echo 3. Test with: python test_backend.py
echo.
pause
goto :end

:error
echo.
echo ================================
echo ❌ Setup verification failed!
echo Please fix the issues above and try again.
echo.
pause
exit /b 1

:end
