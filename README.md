# Blogify by VM

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSONwebtokens&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=flat&logo=google&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-FF6C37?style=flat&logo=imagekit&logoColor=white)

**Full-Stack AI-Powered Blogging Platform**

---

## 🌟 Overview
Blogify by VM is a **full-stack blogging application** built with the **MERN stack**, integrated with **Google Gemini** for AI-powered content suggestions and **ImageKit API** for optimized image management. This project demonstrates expertise in **frontend & backend development**, authentication, database management, and API integrations.

---

## 💻 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT-based login  
- **APIs & Integrations:** Google Gemini, ImageKit  
- **Deployment:** Vercel 

---

## ⚡ Features

- **Admin Dashboard:** Manage blogs, view comments, monitor website activity  
- **Full CRUD:** Create, read, update, delete blog posts  
- **AI Content Suggestions:** Google Gemini integration  
- **Optimized Image Management:** ImageKit API  
- **Secure Authentication:** Admin login and role-based access  
- **Responsive Design:** Works on mobile, tablet, and desktop  

---

## 📁 Project Structure

```
Blogify/
├── client/          # React + Vite frontend (Tailwind CSS)
│   └── src/
└── server/          # Node.js + Express backend
    ├── configs/     # Database & third-party API configuration
    ├── controllers/ # Route handler logic
    ├── middleware/  # Auth & request middleware
    ├── models/      # Mongoose schemas
    └── routes/      # API route definitions
```

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A [MongoDB](https://www.mongodb.com/) database (local or Atlas)
- API keys for **Google Gemini** and **ImageKit**

### 1. Clone the repository
```bash
git clone https://github.com/Vansh150705/Blogify---by-VM.git
cd Blogify---by-VM
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/` with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the server:
```bash
npm run server
```

### 3. Set up the frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `client/` with your API base URL:
```env
VITE_BASE_URL=http://localhost:3000
```

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🚀 Admin Credentials (Demo)

- **Email:** `admin@example.com`  
- **Password:** `123456`  

> ⚠️ These credentials are for demonstration purposes only.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
