import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const connectDB = async () => {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      retryWrites: true,
    };

    await mongoose.connect(process.env.DB_URL, options);
    console.log('Connected to MongoDB');
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected. Attempting to reconnect...');
    });
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    // Retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

connectDB();
