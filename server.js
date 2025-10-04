/**
 * server.js
 * This is the main entry point for the Alertify backend server.
 * It initializes an Express server, applies middleware, and connects the API routes.
 */

// --- Import Core Dependencies ---
const express = require('express');
const cors = require('cors');
// The dotenv package loads environment variables from a .env file into process.env
require('dotenv').config(); 

// --- Initialize Express Application ---
const app = express();
const PORT = process.env.PORT || 3001; // Use the port from .env, or default to 3001

// --- Apply Middleware ---
// 1. CORS (Cross-Origin Resource Sharing): Allows your frontend (running on a different port)
//    to make requests to this backend. A crucial security feature in modern web apps.
app.use(cors());

// 2. Express JSON Parser: Allows the server to understand and process incoming
//    request bodies that are in JSON format (e.g., from a POST request).
app.use(express.json());

// --- Define API Routes ---
// Import the route handlers from their respective files in the /routes directory.
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');

// Tell the Express app to use the imported route handlers for specific URL paths.
// Any request starting with "/api" will be handled by the apiRoutes router.
app.use('/api', apiRoutes);
// Any request starting with "/api/auth" will be handled by the authRoutes router.
app.use('/api/auth', authRoutes);

// --- Root Endpoint ---
// A simple test route to confirm that the API is running and accessible.
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the Alertify AI Backend API!',
    status: 'Running' 
  });
});

// --- Start Server ---
// This command starts the server and makes it listen for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log('====================================================');
  console.log('BACKEND IS UP AND RUNNING!');
  console.log(`Listening for requests on http://localhost:${PORT}`);
  console.log('====================================================');
  console.log('This server simulates AI and social media API connections.');
});

