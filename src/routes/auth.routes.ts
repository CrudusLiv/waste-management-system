import express from 'express';
import { Waste } from '../models/waste.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const wastes = await Waste.find();
    res.json(wastes);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

router.post('/', async (req, res) => {
  const waste = new Waste({
    type: req.body.type,
    quantity: req.body.quantity,
    location: req.body.location,
    status: req.body.status
  });

  try {
    const newWaste = await waste.save();
    res.status(201).json(newWaste);
  } catch (error) {
    const errorMessage = (error as Error).message; // Type assertion
    res.status(400).json({ message: errorMessage });
  }
});

export default router;
