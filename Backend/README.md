# Scoresheet Backend API

A FastAPI backend for the Sports League Manager application.

## Features

- **POST** `/api/v1/matches/` - Create a new team vs team match
- **GET** `/api/v1/matches/` - Fetch all matches
- **GET** `/api/v1/matches/{match_id}` - Fetch a specific match

## Setup

### Prerequisites

**For Local Development (venv):**
- **Python 3.8+** (recommended: Python 3.11)
- **PostgreSQL** database server
- **Git** (for version control)

**For Docker Deployment:**
- **Docker Desktop** (Windows/Mac) or **Docker Engine** (Linux)
- **Docker Compose**

## 🐳 Docker Setup (Recommended)

### Quick Start with Docker

**Windows:**
```bash
# Start everything with Docker (includes PostgreSQL)
docker-start.bat
```

**Manual Docker:**
```bash
# Build and start all services
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**What Docker provides:**
- ✅ PostgreSQL database (automatically configured)
- ✅ FastAPI backend (automatically configured)
- ✅ No local Python/PostgreSQL installation needed
- ✅ Consistent environment across all systems

**Access Points:**
- Backend API: `http://localhost:8000`
- API Documentation: `http://localhost:8000/docs`
- PostgreSQL: `localhost:5432`
- Database: `pickleball_tournament_db`

## 💻 Local Development Setup (venv)

### 1. Create Virtual Environment and Install Dependencies

**Windows (Recommended):**
```bash
# Run the setup script to create virtual environment and install dependencies
setup.bat
```

**Manual Setup:**
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Activate virtual environment (Linux/Mac)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Environment Configuration

Copy `env.example` to `.env` and update the database connection:

```bash
cp env.example .env
```

Edit `.env` with your PostgreSQL credentials:

```env
DATABASE_URL=postgresql://postgres:root@localhost:5432/pickleball_tournament_db
SECRET_KEY=your-secret-key-here
DEBUG=True
```

### 3. Database Setup

**Option A: Use Docker for PostgreSQL only**
```bash
# Start only PostgreSQL with Docker
docker-compose up postgres -d
```

**Option B: Install PostgreSQL locally**
Create a PostgreSQL database named `pickleball_tournament_db` or update the DATABASE_URL in your `.env` file.

### 4. Run the Application

**Windows (Recommended):**
```bash
# Development mode with venv
dev-start.bat

# Or production mode
start.bat
```

**Manual:**
```bash
# Activate virtual environment (Windows)
venv\Scripts\activate

# Activate virtual environment (Linux/Mac)
source venv/bin/activate

# Start the server
python run.py
```

The API will be available at `http://localhost:8000`

## 🚀 Quick Start

### Verify Setup
```bash
# Check if everything is ready
verify_setup.bat
```

### Run Backend
```bash
# Option 1: Docker (Recommended)
docker-start.bat

# Option 2: Virtual Environment
setup.bat
dev-start.bat
```

### Test Backend
```bash
# Run comprehensive tests
python test_backend.py
```

### Access Points
- **API**: http://localhost:8000
- **Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

For detailed instructions, see [RUN_GUIDE.md](RUN_GUIDE.md)

## 📦 Requirements

### Quick Reference
- **Main dependencies**: `requirements.txt` (for venv development)
- **Development tools**: `requirements-dev.txt` (testing, linting, formatting)
- **Production**: `requirements-prod.txt` (minimal production setup)
- **Docker**: `requirements-docker.txt` (containerized deployment)

### Detailed Documentation
See [REQUIREMENTS.md](REQUIREMENTS.md) for comprehensive dependency information.

## API Documentation

Once running, visit:
- **Interactive API docs**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## API Endpoints

### Create Match
```http
POST /api/v1/matches/
Content-Type: application/json

{
  "team1": "HDFC ERGO Eagles",
  "team2": "Tata Digital Tigers",
  "scorecard": "21-19, 18-21, 21-16",
  "status": "completed",
  "date": "2025-09-26",
  "time": "16:30",
  "notes": "Final match of the tournament"
}
```

### Get All Matches
```http
GET /api/v1/matches/
```

### Get Specific Match
```http
GET /api/v1/matches/{match_id}
```

## Project Structure

```
Backend/
├── app/                           # Main application code
│   ├── __init__.py
│   ├── main.py                   # FastAPI application + WebSocket
│   ├── database.py               # Database configuration
│   ├── models.py                 # SQLAlchemy models (team vs team)
│   ├── schemas.py                # Pydantic schemas
│   ├── crud.py                   # Database operations
│   └── api/
│       ├── __init__.py
│       └── endpoints.py          # API endpoints
├── venv/                         # Virtual environment (created by setup.bat)
├── requirements.txt              # Main Python dependencies
├── requirements-dev.txt          # Development dependencies
├── requirements-prod.txt         # Production dependencies
├── requirements-docker.txt       # Docker dependencies
├── REQUIREMENTS.md               # Requirements documentation
├── pyproject.toml                # Modern Python project config
├── env.example                   # Environment variables template
├── run.py                        # Application entry point
├── init.sql                      # Database initialization script
├── Dockerfile                    # Docker container configuration
├── docker-compose.yml            # Docker orchestration
├── .dockerignore                 # Docker build context exclusions
├── setup.bat                     # Windows venv setup script
├── start.bat                     # Windows production start script
├── dev-start.bat                 # Windows development start script
├── docker-start.bat              # Windows Docker start script
├── docker-stop.bat               # Windows Docker stop script
├── add_sample_data.py            # Add sample team vs team data
├── migrate_player_to_team.py     # Migration script for existing data
├── test_backend.py               # Backend testing script
├── verify_setup.bat              # Setup verification script
├── RUN_GUIDE.md                  # Detailed run instructions
└── README.md                     # This file
```

## Development

### 🐳 Docker Commands

**Quick Commands:**
- `docker-start.bat` - Start all services with Docker
- `docker-stop.bat` - Stop all Docker services

**Manual Docker Commands:**
```bash
# Start all services
docker-compose up --build -d

# Start only PostgreSQL
docker-compose up postgres -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes (WARNING: deletes data)
docker-compose down -v

# Rebuild containers
docker-compose up --build --force-recreate
```

### 💻 Virtual Environment Management

**Quick Commands:**
- `setup.bat` - Create virtual environment and install dependencies
- `dev-start.bat` - Start development server with venv
- `start.bat` - Start production server with venv

**Manual Commands:**
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/Mac)
source venv/bin/activate

# Deactivate
deactivate
```

### Technology Stack

**Python Version:** 3.8+ (recommended: 3.11)

The application uses:
- **FastAPI** for the web framework
- **SQLAlchemy** for database ORM
- **PostgreSQL** as the database
- **Pydantic** for data validation
- **Alembic** for database migrations (optional)

### Python Version Management

The project includes:
- `.python-version` - Specifies Python 3.11 (for pyenv users)
- `pyproject.toml` - Modern Python project configuration
- `requirements.txt` - Traditional pip dependencies

## CORS Configuration

The API is configured to allow requests from common frontend development ports:
- `http://localhost:3000` (React default)
- `http://localhost:5173` (Vite default)
- `http://localhost:8080` (Your frontend port)

## Troubleshooting

### 🐳 Docker Issues

**Docker not starting:**
```bash
# Check if Docker is running
docker info

# Restart Docker Desktop (Windows/Mac)
# Or restart Docker service (Linux)
sudo systemctl restart docker
```

**Port conflicts:**
```bash
# Check what's using port 8000
netstat -ano | findstr :8000

# Use different ports in docker-compose.yml
ports:
  - "8001:8000"  # Use port 8001 instead
```

**Database connection issues:**
```bash
# Check PostgreSQL container logs
docker-compose logs postgres

# Restart only PostgreSQL
docker-compose restart postgres
```

### 💻 Virtual Environment Issues

**venv not activating:**
```bash
# Recreate virtual environment
rmdir /s venv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

**Database connection issues:**
```bash
# Check if PostgreSQL is running
# Windows: Check Services
# Linux/Mac: sudo systemctl status postgresql

# Test connection
python -c "import psycopg2; psycopg2.connect('postgresql://postgres:root@localhost:5432/pickleball_tournament_db')"
```

**Permission issues:**
```bash
# Make scripts executable (Linux/Mac)
chmod +x *.sh

# Run as administrator (Windows)
# Right-click Command Prompt -> Run as administrator
```
