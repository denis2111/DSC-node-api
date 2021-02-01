const { decrypt } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const { objectId } = require("../schemas");

const requireAuth = (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
      });
    }

    const claims = decrypt(token);

    req.user = claims;
    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

const payloadValidation = (schema) => async (req, res, next) => {
  try {
    const value = schema.validate(req.body);

    if (value.error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: value.error,
      });
    }

    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

const paramIdValidation = (req, res, next) => {
  try {
    const value = objectId.validate(req.params);

    if (value.error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: value.error,
      });
    }

    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
}

module.exports = {
  requireAuth,
  payloadValidation,
  paramIdValidation,
};