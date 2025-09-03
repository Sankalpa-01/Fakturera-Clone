# 📘 SOW Full-Stack Application Clone
This project is a **full-stack web application** created as a **Statement of Work (SOW)**. It demonstrates expertise in **React frontend**, **Fastify backend**, **database design**, **API development**, **responsive UI/UX**, and **internationalization (i18n)**.

## ✨ Features
- **Pricelist Page** – Fully functional, editable, and responsive.  
- **Terms & Conditions Page** – Pixel-perfect clone with dynamic language switching.  
- **Frontend**: Vite + React with vanilla CSS.  
- **Backend**: Fastify API with Sequelize ORM.  
- **Database**: PostgreSQL with Sequelize models and migrations.  
- **Responsive UI**: Works seamlessly on **desktop, tablet, and mobile** (portrait & landscape).  
- **Internationalization (i18n)**: Language switcher toggles between **English** and **Swedish**.  
- **Modern UI Components**: Slide-out navigation menu (mobile), persistent sidebar (desktop), language dropdown.  

## 🛠 Tech Stack
**Backend**: Fastify v4.x, PostgreSQL v14+, Sequelize v6.x, @fastify/cors, dotenv  
**Frontend**: React v18.2.0, Vite v5.x, Vanilla CSS, Axios v1.x, Lucide React v0.x, JavaScript (ES6+)  

## ⚡ Local Setup & Installation
You need to run **frontend** and **backend** in two separate terminals.  

### ✅ Prerequisites
- Node.js v18+  
- npm  
- PostgreSQL  

### 1️⃣ Backend Setup
Navigate to backend folder:  
```bash
cd backend
npm install
```

## Create .env inside backend/ with the following:
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASS=your_postgres_password
DB_NAME=your_database_name
PORT=5000

## Run backend server:
node server.js

Backend runs at: http://localhost:5000

## Frontend Setup
Navigate to frontend folder:
cd frontend
npm install

## Create .env inside frontend/ with the following:
VITE_API_BASE_URL=http://127.0.0.1:5000/api

## Run frontend server:
npm run dev

Frontend runs at: http://localhost:5173

## Seeding the Database
Use Postman or another API client to populate the database.

Seed Pricelist Data:
POST http://127.0.0.1:5000/api/pricelist/seed

Add Terms Content:
PUT http://127.0.0.1:5000/api/terms/sv   # Swedish content
PUT http://127.0.0.1:5000/api/terms/en   # English content

## Demo
Backend API → http://localhost:5000/api
Frontend App → http://localhost:5173

## License
This project is part of a Statement of Work (SOW) deliverable.
Do you also want me to **add example JSON payloads** for seeding the Pricelist and Terms via Postman so anyone can copy-paste and test immediately?
