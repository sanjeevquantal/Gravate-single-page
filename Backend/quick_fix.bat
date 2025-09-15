@echo off
echo Quick Fix for Backend Setup
echo ===========================
echo.

echo 1. Checking Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo    ❌ Python not found! Please install Python 3.8+
    goto :error
) else (
    echo    ✅ Python found
)

echo.
echo 2. Checking Docker...
docker --version >nul 2>&1
if errorlevel 1 (
    echo    ❌ Docker not found!
    goto :docker_error
) else (
    echo    ✅ Docker found
)

echo.
echo 3. Checking Docker Desktop...
docker info >nul 2>&1
if errorlevel 1 (
    echo    ⚠️  Docker Desktop not running
    echo    Starting Docker Desktop...
    echo    Please wait for Docker Desktop to start completely
    echo    Then run: docker-compose up -d
    echo.
    echo    Alternative: Use venv method
    goto :venv_method
) else (
    echo    ✅ Docker Desktop is running
    goto :docker_method
)

:docker_method
echo.
echo 4. Starting with Docker...
docker-compose up -d
if errorlevel 1 (
    echo    ❌ Docker failed! Trying venv method...
    goto :venv_method
) else (
    echo    ✅ Docker started successfully!
    echo    Backend: http://localhost:8000
    echo    API Docs: http://localhost:8000/docs
    goto :test
)

:venv_method
echo.
echo 4. Setting up Virtual Environment...
if not exist "venv\Scripts\activate.bat" (
    echo    Creating virtual environment...
    python -m venv venv
    if errorlevel 1 (
        echo    ❌ Failed to create virtual environment
        goto :error
    )
)

echo    Activating virtual environment...
call venv\Scripts\activate.bat
if errorlevel 1 (
    echo    ❌ Failed to activate virtual environment
    goto :error
)

echo    Installing dependencies...
pip install --upgrade pip
pip install -r requirements.txt
if errorlevel 1 (
    echo    ❌ Failed to install dependencies
    goto :error
)

echo    ✅ Virtual environment ready!
echo.
echo 5. Starting PostgreSQL...
echo    Note: You need PostgreSQL running
echo    Option A: Start Docker Desktop and run: docker-compose up postgres -d
echo    Option B: Install PostgreSQL locally
echo.
echo 6. Starting Backend...
echo    Run: dev-start.bat
goto :test

:docker_error
echo.
echo Docker not found! Please install Docker Desktop from:
echo https://docker.com
echo.
echo Alternative: Use venv method
goto :venv_method

:test
echo.
echo 7. Testing Backend...
echo    Run: python test_backend.py
echo.
echo ===========================
echo Setup completed!
echo.
pause
goto :end

:error
echo.
echo ===========================
echo Setup failed!
echo Please check the errors above and try again.
echo.
pause
exit /b 1

:end
