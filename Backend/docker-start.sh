#!/bin/bash

echo "Starting Scoresheet Backend with Docker..."
echo

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker is not installed or not in PATH"
    echo "Please install Docker from https://docker.com"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "ERROR: Docker is not running"
    echo "Please start Docker and try again"
    exit 1
fi

echo "Docker found and running!"
echo

# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start services"
    exit 1
fi

echo
echo "✅ Services started successfully!"
echo
echo "Backend API: http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo "PostgreSQL: localhost:5432"
echo
echo "To view logs: docker-compose logs -f"
echo "To stop services: docker-compose down"
echo
