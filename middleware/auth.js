const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    req.isAuthenticated = false;
    return next();
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
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
