// CLASS FOR OUR OPERATIONAL ERRORS
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Like calling the err

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    // (curObj, AppError) When the new obj is created and constructor fucntion is called
    // than that function call is not gonna appear in the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
