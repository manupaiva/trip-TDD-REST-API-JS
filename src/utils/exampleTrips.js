import mongoose from 'mongoose';
import tripSchema from '../models/trip.model';

export const seed = async () => {
  await mongoose.connect('mongodb://localhost:27017/tripsdb');

  await tripSchema.create({
    name: 'new trip',
    description: 'new trip description',
    destination: 'Berlin',
    category: 'family',
    startDate: '2023-09-10',
  });
};
