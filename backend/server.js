const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');  // You can use this if you want to generate JWT tokens
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB URI
const mongoURI = 'mongodb+srv://syed:syed@cluster0.kzize.mongodb.net/ipay?retryWrites=true&w=majority';

// User Schema and Model
const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Log the attempted login
    console.log(`Attempting login for email: ${email}`);

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`User with email ${email} not found.`);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password matches
    if (user.password !== password) {
      console.log(`Incorrect password for email: ${email}`);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If login is successful, generate a token (optional) and return user details
    const userId = user._id.toString();  // Convert ObjectId to string
    const token = jwt.sign({ userId, email }, 'your-secret-key', { expiresIn: '1h' }); // You can set your own secret key and expiry time

    console.log(`Login successful for email: ${email}`);

    // Send back user details and token
    return res.status(200).json({
      message: 'Login successful',
      email: user.email,
      user_id: userId,
      token: token, // JWT token
    });
  } catch (error) {
    console.error(`Error during login: ${error}`);
    return res.status(500).json({ message: `Error during login: ${error.message}` });
  }
});

// Test route to ensure server is running
app.get('/', (req, res) => {
  res.send('Hello, the server is running and connected to MongoDB!');
});

// Start the server
const startServer = async () => {
  try {
    await connectDB(); // Test MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

// Start the server
startServer();
