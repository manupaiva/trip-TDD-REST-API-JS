import mongoose from 'mongoose';
import tripSchema from '../models/trip.model';
import config from '../config';
export const seed = async () => {
  await mongoose.connect(config.DB_URI);

  await tripSchema.create({
    name: 'new trip',
    description: 'new trip description',
    destination: 'Berlin',
    category: 'family',
    startDate: '2023-09-10',
  });
};
