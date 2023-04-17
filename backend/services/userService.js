const tokenService = require("./tokenService")
const db = require("../db/database");

class userService {
  async refresh(refreshToken) {
    if (!refreshToken) {
      console.log(__filename)
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      console.log(__filename)
    }
    const user = await db.query(`SELECT username FROM users WHERE username LIKE $1`, [userData.username])
    const tokens = tokenService.generateTokens({user});

    await tokenService.saveToken(userData.username, tokens.refreshToken);
    return {...tokens, username: userData.username}
  }
  async logout(refreshToken) {
    await db.none('DELETE FROM tokens WHERE token LIKE $1', [refreshToken])
      .then(() => {
        console.log('пользователь разлогинился')
      })
  }
}

module.exports = new userService()
