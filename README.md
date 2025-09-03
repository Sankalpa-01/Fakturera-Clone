SOW Full-Stack Application Clone
This project is a full-stack web application created as a Statement of Work (SOW). It consists of a React frontend and a Fastify backend, demonstrating a range of skills including database design, API development, responsive UI/UX, and internationalization.

Features
Two Main Views:

A fully functional, editable, and responsive Pricelist page.

A pixel-perfect clone of a Terms & Conditions page.

Full-Stack Architecture:

Frontend: Built with Vite + React, using vanilla CSS for styling.

Backend: A Node.js API built with Fastify and the Sequelize ORM.

Database Integration: Data is served from a PostgreSQL database, designed and managed with Sequelize.

Complete Responsiveness: The UI is fully responsive and adapts to desktop, tablet, and mobile (portrait and landscape) screens as per the SOW requirements.

Internationalization (i18n): Both the Pricelist and Terms pages feature a language switcher to toggle between English and Swedish, with all relevant text changing dynamically.

Modern UI Components: Includes a slide-out navigation menu for mobile, a persistent sidebar for desktop, and a language selection dropdown.

Tech Stack & Libraries
This project was built using modern and robust technologies:

Backend
Framework: Fastify v4.x

Database: PostgreSQL v14+

ORM: Sequelize v6.x

Environment Variables: dotenv

CORS Handling: @fastify/cors

Frontend
Framework: React v18.2.0

Build Tool: Vite v5.x

Styling: Vanilla CSS with media queries for responsiveness.

HTTP Client: Axios v1.x

Icons: Lucide React v0.x

Language: JavaScript (ES6+)

Local Setup and Installation
To run this project on your local machine, you will need to run the frontend and backend servers simultaneously in two separate terminals.

Prerequisites
Node.js (v18 or later)

npm

A running PostgreSQL instance

1. Backend Setup
Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create an environment file: Create a file named .env in the backend directory and add your PostgreSQL credentials:

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASS=your_postgres_password
DB_NAME=your_database_name
PORT=5000

Start the backend server:

node server.js

The server will start on http://localhost:5000.

2. Frontend Setup
Open a new terminal and navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Create an environment file: Create a file named .env in the frontend directory and point it to your local backend server:

VITE_API_BASE_URL=[http://127.0.0.1:5000/api](http://127.0.0.1:5000/api)

Start the frontend development server:

npm run dev

The application will be available at http://localhost:5173.

3. Seeding the Database
The database will be empty initially. Use an API client like Postman to populate it with sample data by sending requests to your running backend:

Add Pricelist Data: Send a POST request to http://127.0.0.1:5000/api/pricelist/seed.

Add Terms Content: Send PUT requests to http://127.0.0.1:5000/api/terms/sv and http://127.0.0.1:5000/api/terms/en with the content in the request body.
