This project is a simple full-stack web application built using Node.js and React. The backend provides a REST API that returns a hardcoded list of facts in JSON format. The React frontend fetches and displays these facts. The application is deployed on AWS and is publicly accessible.

## How to Run the Project

### Backend (Express.js API)
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies (if not already done):
   ```
   npm install
   ```
3. Start the server:
   ```
   node index.js
   ```
   The backend will run on http://localhost:3000.

### Frontend (React with Vite)
1. Navigate to the frontend directory:
   ```
   cd fronted
   ```
2. Install dependencies (if not already done):
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on http://localhost:5173 (or the port shown in the terminal).

### Running Both Together
- Open two terminals: one for backend and one for frontend.
- Start the backend first, then the frontend.
- The frontend should connect to the backend API at http://localhost:3000/api/facts.
