import dotenv from 'dotenv';

dotenv.config();
export default {
  PORT: process.env.PORT || 3000,
  AUTHOR: process.env.AUTHOR || 'Jero',
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/tripsdb',
};
