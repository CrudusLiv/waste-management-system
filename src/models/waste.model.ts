import mongoose from 'mongoose';

const wasteSchema = new mongoose.Schema({
  type: String,
  weight: Number,
  location: String,
  date: { type: Date, default: Date.now }
});

export const Waste = mongoose.model('Waste', wasteSchema);
