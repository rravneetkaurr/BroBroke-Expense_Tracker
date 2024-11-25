# MERN Expense Tracker

## Overview

This is a simple Expense Tracker web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to track their expenses and income easily.

## Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running as a background service)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Priyanshurajanand/Expense-Tracker.git
```
## Server Setup

1 **Navigate to the Server Directory**

```bash
cd server
```

2 **Install server Dependencies**

```bash
npm install
```

3 **Create a `.env` file

Create a .env file in the server directory with the following content:

```bash
MONGODB_URI=<your MongoDB connection URI>
PORT = <PORT>
```

Replace <your MongoDB connection URI> with the actual MongoDB connection URI and <PORT> with actual port number.

4 **Start the server**

```bash
npm start
```

## Client Setup

1 **Open a New Terminal Window**

```bash
cd client
```

2 **Install Client Dependencies**

```bash
npm install
```

3 **Start the Client**

```bash
npm start
```

Now you can open your application in web browser

### Additional Notes

- Ensure MongoDB is running before starting the server.
- Customize the application as needed based on your requirements.






## Deployment Guide

This guide provides instructions for deploying the project with the frontend on Netlify and the backend on Render.

## Frontend Deployment (Vercel)

1. **Create a Netlify Account:**
   If you don't have a Netlify account, create one at [Vercel](https://www.vercel.com/).

2. **Connect to Your Repository:**
   - Log in to Vercel.
   - Click on "New site from Git."
   - Connect your repository (GitHub, GitLab, Bitbucket, etc.).

3. **Configure Build Settings:**
   - Set the build command to `npm run build` or the appropriate build command for your frontend.
   - Set the publish directory to the build output directory (commonly `build` or `dist`).

4. **Environment Variables:**
   - Add environment variables if needed (e.g., API endpoint URLs).

5. **Deploy:**
   - Click on "Deploy Site."

6. **Access Your Deployed Frontend:**
   - Once deployed, Vercel provides a unique URL. Access your frontend using that URL.

## Backend Deployment (Render)

1. **Create a Render Account:**
   If you don't have a Render account, create one at [Render](https://render.com/).

2. **Create a New Web Service:**
   - Click on "Create a New Service."
   - Choose "Web Service."

3. **Configure Your Service:**
   - Connect your repository (GitHub, GitLab, Bitbucket, etc.).
   - Set the build command to `npm start` or the appropriate start command for your backend.

4. **Environment Variables:**
   - Add environment variables (e.g., database connection strings, API keys).

5. **Database Configuration:**
   - If you are using a database, configure the connection settings.

6. **Deploy:**
   - Click on "Create Web Service."

7. **Access Your Deployed Backend:**
   - Once deployed, Render provides a unique URL. Access your backend using that URL.

8. **Additional Configuration:**
   - Check Render documentation for any additional configuration or settings.

## Final Notes

- Ensure that your frontend is configured to make API requests to the correct backend URL.
- Update any necessary environment variables for both frontend and backend deployments.
- Test your deployed application thoroughly to ensure all components are working as expected.

---

Feel free to customize the documentation based on your specific project structure and deployment requirements.
