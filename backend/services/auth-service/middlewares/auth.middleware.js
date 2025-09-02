const jwt = require('jsonwebtoken');
const { AppError } = require('../../../shared/errors');
const { users } = require('../../../shared/store');

function authenticate(req, _res, next) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return next(new AppError(401, 'Authorization token missing'));
  try {
    const secret = process.env.JWT_SECRET || 'dev-secret-change-me';
    const payload = jwt.verify(token, secret);
    const user = users.findById(payload.sub);
    if (!user) return next(new AppError(401, 'Invalid token'));
    req.user = user;
    next();
  } catch (e) {
    next(new AppError(401, 'Invalid or expired token'));
  }
}

module.exports = { authenticate };
