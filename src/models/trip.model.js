import mongoose, { Schema } from 'mongoose';

const tripSchema = new Schema(
  {
    name: { type: 'string', required: true },
    description: { type: 'string' },
    destination: { type: 'string', required: true, maxlength: 15 },
    category: { type: 'string', enum: [ 'family', 'friends', 'work' ] },
    startDate: { type: 'date', required: true },
    endDate: { type: 'date' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('tripModel', tripSchema);
