const jwt = require('jsonwebtoken');
const User = require('../models/User');


const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });


exports.register = async (req, res) => {
const { name, email, password } = req.body;
try {
let user = await User.findOne({ email });
if (user) return res.status(400).json({ message: 'User already exists' });
user = await User.create({ name, email, password });
res.status(201).json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token: generateToken(user._id) });
} catch (err) { res.status(500).json({ message: 'Server error' }); }
};


exports.login = async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const isMatch = await user.comparePassword(password);
if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
res.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token: generateToken(user._id) });
} catch (err) { res.status(500).json({ message: 'Server error' }); }
};