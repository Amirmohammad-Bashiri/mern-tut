function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

  res.status(statusCode);
  res.json({ message: err.message, stack });

  next();
}

module.exports = { errorHandler };
