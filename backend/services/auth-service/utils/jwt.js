const jwt = require('jsonwebtoken');

const ACCESS_TTL = process.env.JWT_ACCESS_TTL || '15m';
const REFRESH_TTL = process.env.JWT_REFRESH_TTL || '7d';
const SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

function signAccessToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, type: 'access' }, SECRET, { expiresIn: ACCESS_TTL });
}

function signRefreshToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, type: 'refresh' }, SECRET, { expiresIn: REFRESH_TTL });
}

function verifyRefreshToken(token) {
  const payload = jwt.verify(token, SECRET);
  if (payload.type !== 'refresh') throw new Error('Invalid token type');
  return payload;
}

module.exports = { signAccessToken, signRefreshToken, verifyRefreshToken };
