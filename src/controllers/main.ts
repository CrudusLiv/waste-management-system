import express from 'express';
import mongoose from 'mongoose';
import authRoutes from '../routes/auth.routes';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://CrudusLiv:pNqd4eHjHkWkMNND@cluster0.n2yin.mongodb.net/your_database_name?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env['PORT'] || 5000; // Changed to bracket notation
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
