class AppError extends Error {
  constructor(status = 500, message = 'Internal Server Error') {
    super(message);
    this.status = status;
  }
}

function notFoundHandler(_req, res, _next) {
  res.status(404).json({ error: 'Not Found' });
}

function errorHandler(err, _req, res, _next) {
  if (err.name === 'ZodError') {
    return res.status(400).json({ error: 'Validation error', details: err.issues });
  }
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
}

module.exports = { AppError, errorHandler, notFoundHandler };
