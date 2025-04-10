import express from 'express';
import './db.js';
import dotenv from 'dotenv';
import router from './routes/index.routes.js';
dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB

// Define a simple route
app.use('/api',router)

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});