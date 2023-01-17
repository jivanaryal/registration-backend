const { customAPIError } = require("../errors/custom-error");
const errorHandlerMiddleWare = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  return res.status(err.status).json({ msg: err.message });
};

module.exports = errorHandlerMiddleWare;
