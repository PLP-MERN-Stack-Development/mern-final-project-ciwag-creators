const jwt = require('jsonwebtoken');
const User = require('../models/User');


const auth = async (req, res, next) => {
const authHeader = req.headers.authorization || '';
const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
if (!token) return res.status(401).json({ message: 'No token, authorization denied' });


try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(decoded.id).select('-password');
next();
} catch (err) {
console.error(err);
return res.status(401).json({ message: 'Token is not valid' });
}
};


const adminOnly = (req, res, next) => {
if (!req.user || req.user.role !== 'admin') return res.status(403).json({ message: 'Admin resource' });
next();
};


module.exports = { auth, adminOnly };