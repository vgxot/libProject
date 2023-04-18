const tokenService = require("../services/tokenService")
const ApiError = require("../exceptions/apiError");


module.exports = function (req, res, next) {
  try {
    const authHeader = req.headers.authorization
    console.log(authHeader)
    if (!authHeader) {
      console.log('пустой header')
      return next(ApiError.UnauthorizedError());
    }
    const accessToken = authHeader.split(' ')[1];
    if (!accessToken || accessToken === 'undefined') {
      console.log('пустой или неизвестный токен в header')
      return next(ApiError.UnauthorizedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      console.log('не валидный токен')
      return next(ApiError.UnauthorizedError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};