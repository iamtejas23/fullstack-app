#!/bin/bash

# Fullstack CRUD Application Setup Script
# This script helps you quickly set up the development environment

set -e  # Exit on any error

echo "🚀 Fullstack CRUD Application Setup"
echo "===================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command_exists git; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    if ! command_exists docker; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command_exists docker-compose; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_success "All prerequisites are installed!"
}

# Setup environment files
setup_env_files() {
    print_status "Setting up environment files..."
    
    # Backend environment
    if [ ! -f "backend/.env" ]; then
        cp backend/.env.example backend/.env
        print_success "Backend .env file created from example"
    else
        print_warning "Backend .env file already exists, skipping..."
    fi
    
    # Frontend environment
    if [ ! -f "frontend/.env" ]; then
        cp frontend/.env.example frontend/.env
        print_success "Frontend .env file created from example"
    else
        print_warning "Frontend .env file already exists, skipping..."
    fi
}

# Menu function
show_menu() {
    echo ""
    echo "Please choose an option:"
    echo "1) 🐳 Start with Docker (Recommended)"
    echo "2) 🔧 Manual setup (Node.js + MongoDB required)"
    echo "3) 🧹 Clean up Docker containers and volumes"
    echo "4) 📊 View application status"
    echo "5) 📝 View logs"
    echo "6) ❌ Exit"
    echo ""
}

# Docker setup
docker_setup() {
    print_status "Setting up with Docker..."
    
    # Stop existing containers if any
    docker-compose down 2>/dev/null || true
    
    print_status "Building and starting containers..."
    docker-compose up --build -d
    
    print_status "Waiting for services to be ready..."
    sleep 10
    
    # Check if services are running
    if docker-compose ps | grep -q "Up"; then
        print_success "🎉 Application is running successfully!"
        echo ""
        echo "🌐 Access your application:"
        echo "   Frontend: http://localhost:3000"
        echo "   Backend API: http://localhost:5000"
        echo "   API Health: http://localhost:5000/api/health"
        echo ""
        echo "📊 View logs with: docker-compose logs -f"
        echo "🛑 Stop with: docker-compose down"
    else
        print_error "❌ Failed to start services. Check logs with: docker-compose logs"
    fi
}

# Manual setup
manual_setup() {
    print_status "Setting up manually..."
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        return 1
    fi
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        return 1
    fi
    
    print_status "Installing backend dependencies..."
    cd backend
    npm install
    cd ..
    
    print_status "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
    
    print_success "Dependencies installed successfully!"
    echo ""
    echo "🔧 Manual setup complete. To start the application:"
    echo ""
    echo "1. Start MongoDB:"
    echo "   mongod"
    echo ""
    echo "2. Start backend (in a new terminal):"
    echo "   cd backend && npm run dev"
    echo ""
    echo "3. Start frontend (in another terminal):"
    echo "   cd frontend && npm start"
    echo ""
    echo "📝 Note: Make sure MongoDB is running on localhost:27017"
}

# Clean up Docker
docker_cleanup() {
    print_status "Cleaning up Docker containers and volumes..."
    
    docker-compose down -v 2>/dev/null || true
    docker system prune -f
    
    print_success "Docker cleanup completed!"
}

# View status
view_status() {
    print_status "Application Status:"
    echo ""
    
    if command_exists docker-compose; then
        docker-compose ps
        echo ""
        
        # Check individual services
        print_status "Service Health Checks:"
        
        # Backend health
        if curl -s http://localhost:5000/api/health >/dev/null 2>&1; then
            print_success "✅ Backend API is responding"
        else
            print_error "❌ Backend API is not responding"
        fi
        
        # Frontend health
        if curl -s http://localhost:3000 >/dev/null 2>&1; then
            print_success "✅ Frontend is responding"
        else
            print_error "❌ Frontend is not responding"
        fi
        
        # MongoDB health (if using Docker)
        if docker exec fullstack-mongodb mongosh --eval "db.adminCommand('ping')" >/dev/null 2>&1; then
            print_success "✅ MongoDB is responding"
        else
            print_error "❌ MongoDB is not responding"
        fi
    else
        print_warning "Docker Compose not available. Cannot check container status."
    fi
}

# View logs
view_logs() {
    print_status "Viewing application logs..."
    echo ""
    echo "Press Ctrl+C to stop viewing logs"
    echo ""
    
    if command_exists docker-compose; then
        docker-compose logs -f --tail=50
    else
        print_error "Docker Compose not available."
    fi
}

# Main script
main() {
    check_prerequisites
    setup_env_files
    
    while true; do
        show_menu
        read -p "Enter your choice (1-6): " choice
        
        case $choice in
            1)
                docker_setup
                ;;
            2)
                manual_setup
                ;;
            3)
                docker_cleanup
                ;;
            4)
                view_status
                ;;
            5)
                view_logs
                ;;
            6)
                print_success "👋 Goodbye!"
                exit 0
                ;;
            *)
                print_error "Invalid option. Please choose 1-6."
                ;;
        esac
        
        echo ""
        read -p "Press Enter to continue..."
    done
}

# Run main function
main
