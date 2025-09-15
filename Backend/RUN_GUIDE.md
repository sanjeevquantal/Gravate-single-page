# 🚀 Backend Run Guide

This guide will help you run the backend using either Docker or virtual environment (venv).

## 📋 Prerequisites Check

First, verify your setup:
```bash
# Run the verification script
verify_setup.bat
```

## 🐳 Method 1: Docker (Recommended)

### Quick Start
```bash
# 1. Start everything with Docker
docker-start.bat

# 2. Test the backend
python test_backend.py
```

### What Docker Does
- ✅ Creates PostgreSQL database (`pickleball_tournament_db`)
- ✅ Installs all Python dependencies
- ✅ Starts FastAPI backend on port 8000
- ✅ Sets up networking between containers

### Access Points
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **PostgreSQL**: localhost:5432

### Docker Commands
```bash
# Start services
docker-start.bat

# Stop services
docker-stop.bat

# View logs
docker-compose logs -f

# Restart services
docker-compose restart
```

## 💻 Method 2: Virtual Environment (venv)

### Step 1: Setup Virtual Environment
```bash
# Create and setup virtual environment
setup.bat
```

### Step 2: Start Database (Choose One)

#### Option A: Use Docker for PostgreSQL only
```bash
# Start only PostgreSQL with Docker
docker-compose up postgres -d
```

#### Option B: Install PostgreSQL locally
1. Download PostgreSQL from https://postgresql.org
2. Install with default settings
3. Create database: `pickleball_tournament_db`
4. User: `postgres`, Password: `root`

### Step 3: Start Backend
```bash
# Development mode (with auto-reload)
dev-start.bat

# Or production mode
start.bat
```

## 🧪 Testing Your Setup

### Run Test Suite
```bash
# Test all endpoints and functionality
python test_backend.py
```

### Manual Testing
1. **Health Check**: http://localhost:8000/health
2. **API Docs**: http://localhost:8000/docs
3. **Get Matches**: http://localhost:8000/api/v1/matches/
4. **Create Match**: Use the API docs to create a test match

## 🔧 Troubleshooting

### Common Issues

#### Docker Issues
```bash
# Docker not starting
docker info
# Restart Docker Desktop

# Port conflicts
netstat -ano | findstr :8000
# Kill process using port 8000

# Database connection issues
docker-compose logs postgres
```

#### venv Issues
```bash
# Virtual environment not activating
rmdir /s venv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

# Database connection issues
# Check if PostgreSQL is running
# Test connection: python -c "import psycopg2; psycopg2.connect('postgresql://postgres:root@localhost:5432/pickleball_tournament_db')"
```

### Error Messages

#### "Module not found"
```bash
# Install missing dependencies
pip install -r requirements.txt
```

#### "Database connection failed"
```bash
# Check PostgreSQL is running
# Verify database name: pickleball_tournament_db
# Check credentials: postgres/root
```

#### "Port already in use"
```bash
# Find process using port 8000
netstat -ano | findstr :8000
# Kill the process or use different port
```

## 📊 Verification Checklist

- [ ] Python 3.8+ installed
- [ ] Docker installed (for Docker method)
- [ ] PostgreSQL running (for venv method)
- [ ] Virtual environment created (for venv method)
- [ ] Dependencies installed
- [ ] Backend starts without errors
- [ ] Health check returns 200
- [ ] API documentation accessible
- [ ] Can create and retrieve matches

## 🎯 Quick Commands Reference

### Docker
```bash
docker-start.bat          # Start everything
docker-stop.bat           # Stop everything
docker-compose logs -f    # View logs
```

### venv
```bash
setup.bat                 # Setup virtual environment
dev-start.bat             # Development mode
start.bat                 # Production mode
```

### Testing
```bash
python test_backend.py    # Run test suite
verify_setup.bat          # Verify setup
```

## 🆘 Getting Help

If you encounter issues:

1. **Run verification**: `verify_setup.bat`
2. **Check logs**: Look at console output for error messages
3. **Test connectivity**: `python test_backend.py`
4. **Check documentation**: README.md and REQUIREMENTS.md
5. **Verify database**: Ensure PostgreSQL is running and accessible

## 🎉 Success Indicators

You'll know everything is working when:
- ✅ Backend starts without errors
- ✅ Health check returns: `{"status": "healthy"}`
- ✅ API docs load at http://localhost:8000/docs
- ✅ You can create and retrieve matches
- ✅ Test suite passes all checks
