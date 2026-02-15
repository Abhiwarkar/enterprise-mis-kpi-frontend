# 🚀 Enterprise MIS & KPI Monitoring System (Frontend)

Frontend application for the Enterprise MIS & KPI Monitoring System.

This application provides a modern dashboard interface to manage departments, track monthly targets & actuals, and visualize KPI reports.

Built using React + Vite.

---

## 🏗 Overview

This frontend connects to the MIS KPI Backend API and provides:

- Department Management UI
- Target Entry Forms
- Actual Entry Forms
- KPI Report Dashboard
- Performance Tracking Interface

---

## 🛠 Tech Stack

- React
- Vite
- Axios
- Tailwind CSS / CSS Modules
- React Router
- JWT Authentication
- REST API Integration

---

## 📊 Features

### ✅ Department Management
- Create department
- View department list
- Active status toggle

### ✅ Monthly Target Entry
- Add monthly target per department

### ✅ Monthly Actual Entry
- Add monthly actual performance

### ✅ KPI Reports Dashboard
- View KPI reports
- Target vs Actual comparison
- Variance %
- Performance Status

### ✅ Authentication
- Login system
- JWT token handling
- Protected routes

---

## 📡 Backend Integration

Default Backend URL:

http://localhost:9090


You can change it inside:



src/services/api.js


Example:

```javascript
const API_BASE_URL = "http://localhost:9090/api";

⚙ Environment Configuration

Create .env file:

VITE_API_BASE_URL=http://localhost:9090/api


Use inside project:

import.meta.env.VITE_API_BASE_URL


▶ Running the Project
1️⃣ Install Dependencies
npm install

2️⃣ Start Development Server
npm run dev


App runs on:

http://localhost:5173

📂 Project Structure
src/
│
├── components/
├── pages/
├── services/
├── routes/
├── hooks/
└── App.jsx

Production Build
npm run build


Generated files inside:

dist/

