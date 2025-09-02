const bcrypt = require('bcryptjs');
const { z } = require('zod');
const { users } = require('../../../shared/store');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt');
const { ok, created } = require('../../../shared/response');
const { AppError } = require('../../../shared/errors');
const { verifyGoogleIdToken } = require('../utils/google');

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

async function register(req, res, next) {
  try {
    const { email, password } = credentialsSchema.parse(req.body);
    const existing = users.findByEmail(email);
    if (existing) throw new AppError(409, 'Email already in use');

    const hash = await bcrypt.hash(password, 10);
    const user = users.create({ email, passwordHash: hash });

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    return created(res, {
      user: { id: user.id, email: user.email },
      tokens: { accessToken, refreshToken }
    });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = credentialsSchema.parse(req.body);
    const user = users.findByEmail(email);
    if (!user) throw new AppError(401, 'Invalid email or password');

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new AppError(401, 'Invalid email or password');

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    return ok(res, {
      user: { id: user.id, email: user.email },
      tokens: { accessToken, refreshToken }
    });
  } catch (err) {
    next(err);
  }
}

async function refreshToken(req, res, next) {
  try {
    const token = req.body && req.body.refreshToken;
    if (!token) throw new AppError(400, 'refreshToken is required');
    const payload = verifyRefreshToken(token);

    const user = users.findById(payload.sub);
    if (!user) throw new AppError(401, 'Invalid refresh token');

    const accessToken = signAccessToken(user);
    const newRefresh = signRefreshToken(user);
    return ok(res, { tokens: { accessToken, refreshToken: newRefresh } });
  } catch (err) {
    next(err);
  }
}

async function getProfile(req, res) {
  const user = req.user;
  return ok(res, { user: { id: user.id, email: user.email } });
}

module.exports = { register, login, refreshToken, getProfile };

// Google OAuth (ID Token) login
async function googleLogin(req, res, next) {
  try {
    const idToken = req.body && req.body.idToken;
    if (!idToken) throw new AppError(400, 'idToken is required');

    const g = await verifyGoogleIdToken(idToken);
    if (!g.email || !g.email_verified) throw new AppError(401, 'Google email not verified');

    let user = users.findByEmail(g.email);
    if (!user) {
      // Create a user without password for Google login
      user = users.create({ email: g.email, passwordHash: null });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    return ok(res, {
      user: { id: user.id, email: user.email, name: g.name, picture: g.picture },
      tokens: { accessToken, refreshToken }
    });
  } catch (err) {
    next(err);
  }
}

module.exports.googleLogin = googleLogin;
