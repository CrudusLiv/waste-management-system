const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Adjust the path as necessary
const notificationRoutes = require('./notificationRoutes'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB database connection
mongoose.connect('mongodb+srv://CrudusLiv:pNqd4eHjHkWkMNND@cluster0.n2yin.mongodb.net/your_database_name?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to the MongoDB database.');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

// Define a Notification model
const Notification = mongoose.model('Notification', new mongoose.Schema({
  title: String,
  message: String,
}));

// Define API routes
app.get('/api/notifications', (req, res) => {
  Notification.find({}, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.post('/api/notifications', (req, res) => {
  const notification = new Notification(req.body);
  notification.save((err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send(result);
  });
});

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to fetch user data by userId
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create a token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Respond with the token and user info
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Use the notification routes
app.use(notificationRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
