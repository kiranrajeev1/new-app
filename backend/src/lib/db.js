import mongoose from "mongoose";

const connectWithRetry = async () => {
  try {
    // Check if the environment variable is set
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is required');
    }
    
    // Attempt to connect
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.log("Retrying connection in 5 seconds...");
    
    // Wait 5 seconds before trying to reconnect
    setTimeout(connectWithRetry, 5000);
  }
};

export const connectDB = async () => {
  await connectWithRetry();
};
