@echo off
echo 🚀 Setting up Fullstack CRUD Application...
echo ============================================

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js ^(v16 or higher^) first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo ✅ npm found

REM Install backend dependencies
echo.
echo 📦 Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed successfully

REM Install frontend dependencies
echo.
echo 📦 Installing frontend dependencies...
cd ..\frontend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed successfully

cd ..

echo.
echo 🎉 Installation completed successfully!
echo.
echo 📋 Next steps:
echo 1. Make sure MongoDB is running on your system
echo 2. Start the backend: cd backend ^&^& npm run dev
echo 3. Start the frontend: cd frontend ^&^& npm start
echo.
echo Or use Docker:
echo docker-compose up --build
echo.
echo 🌐 Application will be available at:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo Happy coding! 🎉
pause
