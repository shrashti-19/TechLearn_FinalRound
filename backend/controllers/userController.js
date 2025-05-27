const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Temporary in-memory users array
const users = [];

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save new user
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Creating JWT token (replace 'secretkey' with your secret in production)
  const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });

  res.json({ token });
};
