const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-token-google');

// GOOGLE STRATEGY
const GoogleStrategyCallback = (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    GoogleStrategyCallback,
  ),
);

const authenticateGoogle = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      'google-token',
      {
        session: false,
        scope: [
          'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/userinfo.email',
        ],
      },
      (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      },
    )(req, res);
  });

module.exports = { authenticateGoogle };
