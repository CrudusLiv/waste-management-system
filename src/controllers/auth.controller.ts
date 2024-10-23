import { Request, Response } from 'express';
import User from '../models/User.model'; // Updated import path
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
  const { email, password, address, contactNumber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      address,
      contactNumber,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message; // Type assertion
    return res.status(400).json({ message: errorMessage }); // Ensure a return statement here
  }
  return res.status(500).json({ message: 'Internal server error' }); // Added return statement
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    return res.status(200).json({ token }); // Ensure a return statement here
  } catch (error: unknown) {
    const errorMessage = (error as Error).message; // Type assertion
    return res.status(400).json({ message: errorMessage }); // Ensure a return statement here
  }
};
