#!/bin/bash

# Docker start script for Formeta website
echo "🚀 Starting Formeta Website..."

# Stop existing containers
docker-compose down

# Build and start containers
echo "📦 Building and starting containers..."
docker-compose up --build -d

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Check if containers are running
echo "🔍 Checking container status..."
docker-compose ps

# Show logs
echo "📋 Container logs:"
docker-compose logs --tail=50 formeta-web

echo "✅ Formeta Website is now running!"
echo "🌐 Access the website at: http://localhost:3000"
echo "🗄️ Database is running on: localhost:5432"

# Optional: Watch logs
echo "📝 To watch live logs, run: docker-compose logs -f formeta-web"
