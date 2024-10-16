import express from 'express';
import { Waste } from '../models/waste.model';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const newWaste = new Waste(req.body);
    await newWaste.save();
    res.status(201).json(newWaste);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});
export default router;
