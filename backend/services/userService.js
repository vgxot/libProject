const tokenService = require("./tokenService")
const db = require("../db/database");
const ApiError = require("../exceptions/apiError");

class userService {
  async refresh(refreshToken) {
    if (!refreshToken) {
      return ApiError.UnauthorizedError();
    }
    let userData = tokenService.validateRefreshToken(refreshToken);
    const username = userData.username
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      return ApiError.UnauthorizedError();
    }
    const tokens = tokenService.generateTokens({username});
    await tokenService.saveToken(userData.username, tokens.refreshToken);
    return {userData, tokens}
  }
  async logout(refreshToken) {
    await db.none('UPDATE tokens SET token = null WHERE token LIKE $1', [refreshToken])
      .then(() => {
        console.log('пользователь разлогинился')
      })
  }


}

module.exports = new userService()
