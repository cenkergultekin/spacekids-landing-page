const express = require('express');
const { register, login, getProfile, refreshToken, googleLogin } = require('../controllers/auth.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);
router.get('/profile', authenticate, getProfile);
router.post('/google', googleLogin);

module.exports = router;
