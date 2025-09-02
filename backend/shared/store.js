const { v4: uuidv4 } = require('uuid');

// Simple in-memory store. Replace with DB later.
const _users = new Map();

function create({ email, passwordHash }) {
  const id = uuidv4();
  const user = { id, email, passwordHash, createdAt: new Date().toISOString() };
  _users.set(id, user);
  return user;
}
function findByEmail(email) {
  for (const u of _users.values()) if (u.email === email) return u;
  return null;
}
function findById(id) {
  return _users.get(id) || null;
}

const users = { create, findByEmail, findById };

module.exports = { users };
