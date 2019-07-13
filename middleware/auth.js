const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    req.isAuthenticated = false;
    return next();
  }
  const tokenString = token.split(' ')[1];
  try {
    const decoded = jwt.verify(tokenString, process.env.TOKEN_SECRET);

    if (!decoded) {
      req.isAuthenticated = false;
      return next();
    }

    req.isAuthenticated = true;
    req.userId = decoded.id;
    return next();
  } catch (error) {
    req.isAuthenticated = false;
    return next();
  }
};

module.exports = authMiddleware;
