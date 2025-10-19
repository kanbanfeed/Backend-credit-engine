Universal Credit Engine

This repository contains the backend and frontend for a lightweight Universal Credit Engine. The backend is a Node.js/Express server that processes mock Stripe webhooks, issues user credits, and exposes a REST API. The frontend is a React/Tailwind dashboard to view key metrics.

Features

Webhook Processing: Receives and persists mock Stripe payment events.

Credit Calculation: Converts dollar amounts to credits ($1 = 1 credit).

REST API: Exposes endpoints to retrieve user balances and transaction details.

Admin Dashboard: A clean UI to visualize total transactions, credits issued, and recent user activity.

Live URLs

Frontend (Admin Dashboard): https://kanban-assignment-delta.vercel.app

Backend API: https://backend-credit-engine.onrender.com

Tech Stack

Backend: Node.js, Express, TypeScript, Prisma (with SQLite/PostgreSQL)

Frontend: React, TypeScript, Vite, Tailwind CSS, TanStack Query

Deployment: Backend on Render, Frontend on Vercel

Getting Started

Follow these instructions to get the project set up and running on your local machine.

Prerequisites

Node.js (v18 or later)

npm or pnpm

1. Setup

First, clone the repository to your local machine.

git clone <repository-url>
cd Backend-credit-engine


Backend Setup:

Navigate to the backend directory and install the dependencies.

cd code/backend
npm install


Create a .env file in the code/backend directory and add your database connection string for local development.

.env Example:

# For local SQLite
DATABASE_URL="file:./dev.db"


Next, set up the database using Prisma.

npx prisma migrate dev --name init


Frontend Setup:

Navigate to the frontend directory and install the dependencies.

cd code/frontend
npm install


2. Run Locally

To run the application, you'll need to start both the backend and frontend servers in separate terminals.

Start the Backend Server:

From the code/backend directory:

npm run dev


The backend server will start on http://localhost:9000.

Start the Frontend Server:

From the code/frontend directory:

npm run dev


The frontend React app will start on http://localhost:5173 (or the next available port). You can open this URL in your browser to see the admin dashboard.

3. Testing the API

You can test the API endpoints using a tool like Postman, Insomnia, or curl.

POST /api/stripe-webhook

This endpoint simulates receiving a payment event from Stripe. Send a POST request to http://localhost:9000/api/stripe-webhook.

Sample JSON Payload:

{
  "userEmail": "jane.doe@example.com",
  "amount": 49.99,
  "stripeCheckoutId": "cs_test_a1b2C3d4E5f6G7h8",
  "stripeCustomerId": "cus_X9Y8Z7W6V5U4"
}


A successful request will return a 200 OK status.

GET API Endpoints

You can test the GET endpoints directly in your browser or with an API client.

Get a user's total credit balance:
GET http://localhost:9000/api/credits/jane.doe@example.com

Get overall dashboard stats:
GET http://localhost:9000/api/credits-details

Get a list of all recent transactions:
GET http://localhost:9000/api/user-info

4. Deployment

Backend: Deployed on Render. The service is configured to use the npm run build command and npm start to run.

Frontend: Deployed on Vercel. The service is connected to the GitHub repository and builds the React application from the code/frontend directory.
