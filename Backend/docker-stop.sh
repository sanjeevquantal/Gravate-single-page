#!/bin/bash

echo "Stopping Scoresheet Backend Docker services..."
echo

# Stop and remove containers
docker-compose down

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to stop services"
    exit 1
fi

echo
echo "✅ Services stopped successfully!"
echo
echo "To start again: ./docker-start.sh"
echo "To remove volumes (WARNING: deletes data): docker-compose down -v"
echo
