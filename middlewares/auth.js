const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const apiKey = req.get('apiKey') ? req.get('apiKey') : req.query.apiKey;
  const accessToken = req.get('accessToken') ? req.get('accessToken') : req.query.accessToken;

  try {
    const user = jwt.verify(accessToken, apiKey);
    res.locals.identity = user;

    return next();
  } catch (error) {
    return res.status(403).json({ message: 'Access denied' });
  }
};