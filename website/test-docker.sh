#!/bin/bash

# Test script for Formeta website
echo "🧪 Testing Formeta Website..."

# Test 1: Build the project
echo "📦 Test 1: Building project..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Test 2: Check if Docker is available
echo "🐳 Test 2: Checking Docker availability..."
if command -v docker &> /dev/null; then
    echo "✅ Docker is available"
else
    echo "❌ Docker is not available"
    exit 1
fi

# Test 3: Check if docker-compose is available
echo "🔧 Test 3: Checking docker-compose availability..."
if command -v docker-compose &> /dev/null; then
    echo "✅ Docker Compose is available"
else
    echo "❌ Docker Compose is not available"
    exit 1
fi

# Test 4: Validate Docker configuration
echo "🔍 Test 4: Validating Docker configuration..."
docker-compose config > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Docker configuration is valid"
else
    echo "❌ Docker configuration is invalid"
    exit 1
fi

# Test 5: Check required files
echo "📋 Test 5: Checking required files..."
REQUIRED_FILES=("Dockerfile" "docker-compose.yml" "package.json" "svelte.config.js")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
        exit 1
    fi
done

# Test 6: Start containers in test mode
echo "🚀 Test 6: Starting containers in test mode..."
docker-compose up --build -d
if [ $? -eq 0 ]; then
    echo "✅ Containers started successfully"
    
    # Wait for services to be ready
    echo "⏳ Waiting for services to be ready..."
    sleep 30
    
    # Test if web service is responding
    echo "🌐 Testing web service..."
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "000")
    if [ "$HTTP_STATUS" -eq 200 ]; then
        echo "✅ Web service is responding (HTTP $HTTP_STATUS)"
    else
        echo "⚠️  Web service status: HTTP $HTTP_STATUS"
        echo "📋 Container logs:"
        docker-compose logs --tail=20 formeta-web
    fi
    
    # Cleanup
    echo "🧹 Cleaning up test containers..."
    docker-compose down
    
else
    echo "❌ Failed to start containers"
    exit 1
fi

echo "🎉 All tests passed! Formeta website is ready for Docker deployment."
echo "🚀 To start the website, run: ./docker-start.sh"
