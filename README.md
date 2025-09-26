# Fullstack CRUD Application

A modern, containerized fullstack web application built with React.js, Node.js, Express.js, and MongoDB. Features a beautiful glassmorphism UI with complete CRUD operations for user management.

![Application Screenshot](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248)

## 🚀 Live Demo

**Docker Hub Images:**
- Frontend: `iamtejas23/fullstack-crud-frontend:latest`
- Backend: `iamtejas23/fullstack-crud-backend:latest`

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Docker Deployment](#-docker-deployment)
- [Manual Installation](#-manual-installation)
- [API Documentation](#-api-documentation)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Production Deployment](#-production-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Frontend
- 🎨 **Modern UI Design** - Glassmorphism design with responsive layout
- 📱 **Mobile Responsive** - Works seamlessly on all device sizes
- ⚡ **Real-time Updates** - Instant feedback with toast notifications
- 🔍 **Search Functionality** - Live search through user data
- 🎭 **Smooth Animations** - Framer Motion powered transitions
- 🛡️ **Form Validation** - Client-side validation with error handling
- 🌙 **Modern UX** - Intuitive user interface with loading states

### Backend
- 🔒 **Security First** - Helmet.js for security headers, CORS protection
- 📊 **RESTful API** - Clean API design with proper HTTP status codes
- 🗃️ **Database Integration** - MongoDB with Mongoose ODM
- 🔍 **Input Validation** - Server-side validation and sanitization
- 📝 **Comprehensive Logging** - Morgan logger for request tracking
- 🏥 **Health Checks** - Built-in health monitoring endpoints
- ⚡ **High Performance** - Optimized for production workloads

### DevOps
- 🐳 **Fully Dockerized** - Multi-stage Docker builds for optimization
- 🔄 **CI/CD Ready** - Docker Compose orchestration
- 📦 **Production Ready** - Nginx reverse proxy for frontend
- 🔧 **Health Monitoring** - Container health checks for all services
- 📊 **Logging** - Centralized logging across all services

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Framer Motion** - Animation library for smooth transitions
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **CSS3** - Modern CSS with Flexbox and Grid

### Backend
- **Node.js 18** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Helmet.js** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing

### DevOps & Tools
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Web server and reverse proxy
- **Git** - Version control
- **GitHub** - Code repository and collaboration

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React)       │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
│   Port: 3000    │    │   Port: 5000    │    │   Port: 27017   │
│   Nginx Server  │    │   Express API   │    │   Mongo Server  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Git** (latest version)
- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)

### Optional (for manual installation):
- **Node.js** (version 18 or higher)
- **npm** (version 8 or higher)
- **MongoDB** (version 5.0 or higher)

## 🚀 Quick Start

### Option 1: Using Docker Hub Images (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iamtejas23/fullstack-crud-app.git
   cd fullstack-crud-app
   ```

2. **Run with pre-built Docker Hub images:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Option 2: Build from Source (Development)

1. **Clone and build from source:**
   ```bash
   git clone https://github.com/iamtejas23/fullstack-crud-app.git
   cd fullstack-crud-app
   docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build -d
   ```

## 🐳 Docker Deployment

### Using Pre-built Images (Production)

The application is available as Docker images on Docker Hub:

```bash
# Pull and run the complete application
docker-compose up -d

# Check container status
docker-compose ps

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Building from Source (Development)

```bash
# Build and run all services from source
docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build -d

# Rebuild specific service
docker-compose build backend
docker-compose up -d backend

# Scale services (if needed)
docker-compose up -d --scale backend=2
```

### Available Docker Compose Files

- `docker-compose.yml` - Main configuration using Docker Hub images
- `docker-compose.override.yml` - Development override to build from source

## 💻 Manual Installation

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB** (if not using Docker):
   ```bash
   mongod
   ```

5. **Start the backend server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the frontend:**
   ```bash
   # Development mode
   npm start
   
   # Production build
   npm run build
   npm install -g serve
   serve -s build -l 3000
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "success": true,
  "message": "Server is running!",
  "timestamp": "2025-09-26T06:19:16.841Z"
}
```

#### Get All Users
```http
GET /api/users
```
**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "64f7a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "profession": "Developer",
      "createdAt": "2025-09-26T06:11:19.315Z",
      "updatedAt": "2025-09-26T06:11:19.315Z"
    }
  ]
}
```

#### Get User by ID
```http
GET /api/users/:id
```

#### Create New User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "profession": "Developer"
}
```

#### Update User
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 31,
  "profession": "Senior Developer"
}
```

#### Delete User
```http
DELETE /api/users/:id
```

### Error Responses

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

## 🔧 Environment Variables

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://admin:password123@mongodb:27017/fullstack-crud?authSource=admin
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Docker Compose Environment
```env
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password123
MONGO_INITDB_DATABASE=fullstack-crud
```

## 📁 Project Structure

```
fullstack-crud-app/
├── 📁 backend/                 # Node.js Express API
│   ├── 📁 models/             # Mongoose models
│   │   └── User.js            # User model schema
│   ├── 📁 routes/             # API routes
│   │   └── users.js           # User CRUD routes
│   ├── 📁 middleware/         # Custom middleware
│   ├── server.js              # Express server setup
│   ├── package.json           # Backend dependencies
│   ├── Dockerfile             # Backend container config
│   └── .dockerignore          # Docker ignore rules
├── 📁 frontend/               # React application
│   ├── 📁 public/             # Static assets
│   ├── 📁 src/                # React source code
│   │   ├── 📁 components/     # Reusable components
│   │   │   ├── Navbar.js      # Navigation component
│   │   │   └── UserCard.js    # User display component
│   │   ├── 📁 pages/          # Page components
│   │   │   ├── Home.js        # Home page
│   │   │   ├── Users.js       # Users listing
│   │   │   ├── AddUser.js     # Add user form
│   │   │   └── EditUser.js    # Edit user form
│   │   ├── 📁 services/       # API services
│   │   │   └── userService.js # User API calls
│   │   ├── App.js             # Main App component
│   │   ├── index.js           # React entry point
│   │   └── App.css            # Global styles
│   ├── package.json           # Frontend dependencies
│   ├── Dockerfile             # Frontend container config
│   ├── nginx.conf             # Nginx configuration
│   └── .dockerignore          # Docker ignore rules
├── docker-compose.yml         # Main Docker Compose configuration
├── docker-compose.override.yml # Development override (build from source)
├── mongo-init.js              # MongoDB initialization
├── setup.sh                   # Interactive setup script
├── .gitignore                 # Git ignore rules
├── README.md                  # Project documentation
└── LICENSE                    # License file
```

## 🔄 Development

### Setting up Development Environment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iamtejas23/fullstack-crud-app.git
   cd fullstack-crud-app
   ```

2. **Start development environment:**
   ```bash
   # Start MongoDB
   docker run -d -p 27017:27017 --name mongodb mongo

   # Start backend in development mode
   cd backend
   npm install
   npm run dev

   # Start frontend in development mode (new terminal)
   cd frontend
   npm install
   npm start
   ```

### Available Scripts

#### Backend Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests (to be implemented)
```

#### Frontend Scripts
```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🚀 Production Deployment

### Docker Swarm Deployment

1. **Initialize Docker Swarm:**
   ```bash
   docker swarm init
   ```

2. **Deploy the stack:**
   ```bash
   docker stack deploy -c docker-compose.yml fullstack-app
   ```

### Cloud Deployment Options

- **AWS ECS** - Use the Docker images with ECS service
- **Google Cloud Run** - Deploy containers serverlessly
- **Digital Ocean App Platform** - Simple container deployment
- **Heroku Container Registry** - Deploy with Heroku

## 🔧 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using the port
sudo lsof -i :5000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>
```

#### Docker Issues
```bash
# Remove all containers and volumes
docker-compose down -v

# Clean up Docker system
docker system prune -a

# Rebuild from scratch
docker-compose up --build --force-recreate
```

#### MongoDB Connection Issues
```bash
# Check MongoDB logs
docker-compose logs mongodb

# Connect to MongoDB container
docker exec -it fullstack-mongodb mongosh

# Check database
use fullstack-crud
db.users.find()
```

### Health Checks

```bash
# Backend health
curl http://localhost:5000/api/health

# Frontend health (should return HTML)
curl http://localhost:3000

# MongoDB health
docker exec fullstack-mongodb mongosh --eval "db.adminCommand('ping')"
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Make your changes**
4. **Add tests** for new functionality
5. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
6. **Push to the branch** (`git push origin feature/AmazingFeature`)
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Ensure all tests pass
- Add tests for new functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tejas Mane**
- GitHub: [@iamtejas23](https://github.com/iamtejas23)
- Docker Hub: [iamtejas23](https://hub.docker.com/u/iamtejas23)
- Email: tsmane8787@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community for the robust backend framework
- MongoDB team for the flexible database
- Docker community for containerization tools
- All open-source contributors who made this project possible

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/iamtejas23/fullstack-crud-app)
![GitHub forks](https://img.shields.io/github/forks/iamtejas23/fullstack-crud-app)
![GitHub issues](https://img.shields.io/github/issues/iamtejas23/fullstack-crud-app)
![GitHub license](https://img.shields.io/github/license/iamtejas23/fullstack-crud-app)

---

**⭐ Star this repository if you found it helpful!**
