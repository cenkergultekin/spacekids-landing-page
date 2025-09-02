const { OAuth2Client } = require('google-auth-library');

const clientId = process.env.GOOGLE_CLIENT_ID || '';
const client = clientId ? new OAuth2Client(clientId) : null;

async function verifyGoogleIdToken(idToken) {
  if (!clientId) throw new Error('GOOGLE_CLIENT_ID is not configured');
  const ticket = await client.verifyIdToken({ idToken, audience: clientId });
  const payload = ticket.getPayload();
  return {
    sub: payload.sub,
    email: payload.email,
    email_verified: payload.email_verified,
    name: payload.name,
    picture: payload.picture
  };
}

module.exports = { verifyGoogleIdToken };
