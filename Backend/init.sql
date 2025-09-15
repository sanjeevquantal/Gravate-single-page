-- Database initialization script for PostgreSQL
-- This script runs when the PostgreSQL container starts for the first time

-- Create database if it doesn't exist (though it's created via environment variable)
-- This is just for reference
-- CREATE DATABASE IF NOT EXISTS pickleball_tournament_db;

-- Grant privileges (handled by environment variables in docker-compose)
-- GRANT ALL PRIVILEGES ON DATABASE pickleball_tournament_db TO postgres;

-- The actual table creation will be handled by SQLAlchemy when the FastAPI app starts
-- This file is here for any additional database setup if needed in the future
