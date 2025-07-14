#!/bin/bash

# Docker configuration script for Formeta website
echo "🔧 Configuring Docker environment for Formeta..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

print_status "Docker and Docker Compose are installed"

# Check if .env file exists
if [ ! -f .env ]; then
    print_warning ".env file not found. Creating from .env.example..."
    cp .env.example .env
    print_status "Created .env file from .env.example"
    print_warning "Please update the .env file with your configuration"
else
    print_status ".env file exists"
fi

# Create uploads directory if it doesn't exist
if [ ! -d "uploads" ]; then
    mkdir -p uploads
    print_status "Created uploads directory"
fi

# Create database directory if it doesn't exist
if [ ! -d "database" ]; then
    mkdir -p database
    print_status "Created database directory"
fi

# Check if database init script exists
if [ ! -f "database/init.sql" ]; then
    print_warning "Creating basic database initialization script..."
    cat > database/init.sql << 'EOF'
-- Formeta Database Initialization Script
-- This script will be run when the database container starts for the first time

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    service_type VARCHAR(100),
    budget_range VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admin user (password: admin123)
INSERT INTO users (email, password, name, role) 
VALUES ('admin@formeta.es', '$2b$10$K7L1OJ45/4Y2nIvL0DvVPurPqKJJRVJXAZLhTWnM7QbVxJOzJ8gJK', 'Admin', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Set up permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO formeta;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO formeta;

EOF
    print_status "Created database initialization script"
fi

# Validate docker-compose.yml
if docker-compose config > /dev/null 2>&1; then
    print_status "docker-compose.yml configuration is valid"
else
    print_error "docker-compose.yml configuration is invalid"
    exit 1
fi

# Build the application
print_status "Building the application..."
if ./node_modules/.bin/vite build > /dev/null 2>&1; then
    print_status "Application built successfully"
else
    print_error "Application build failed"
    exit 1
fi

# Create network if it doesn't exist
if ! docker network ls | grep -q formeta-network; then
    docker network create formeta-network
    print_status "Created Docker network: formeta-network"
fi

# Set proper permissions
chmod +x docker-start.sh
chmod +x test-docker.sh

print_status "Docker configuration completed successfully!"
echo ""
echo "🚀 Next steps:"
echo "1. Review and update .env file with your configuration"
echo "2. Run './docker-start.sh' to start the application"
echo "3. Run './test-docker.sh' to run comprehensive tests"
echo ""
echo "📋 Available commands:"
echo "- ./docker-start.sh    : Start the application"
echo "- ./test-docker.sh     : Run tests"
echo "- docker-compose logs  : View logs"
echo "- docker-compose down  : Stop the application"
