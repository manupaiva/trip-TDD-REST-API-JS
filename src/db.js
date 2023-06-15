import mongoose from 'mongoose';
import config from './config.js';
export const dbConnect = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    console.log('Successfully connected to database');
  } catch (error) {
    console.error(
      `Error connecting to database ${config.DB_URI}`,
      error.message
    );
  }
};
