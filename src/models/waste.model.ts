import mongoose from 'mongoose';

const wasteSchema = new mongoose.Schema({
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

export const Waste = mongoose.model('Waste', wasteSchema);
