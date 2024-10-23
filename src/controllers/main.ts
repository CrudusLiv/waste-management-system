import express from 'express';
import mongoose from 'mongoose';
import authRoutes from '../routes/auth.routes'; // Adjusted path

const app = express();
app.use(express.json());

mongoose.connect('your_mongodb_connection_string')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env['PORT'] || 5000; // Changed access method
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
