const db = require("../db/database");
const jwt = require("jsonwebtoken");

class tokenService {
  generateTokens(payload) {    // создает токен авторизации, берет секретный ключ и устанавливает время его жизни
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
    return {
      accessToken,
      refreshToken
    }
  }
  async saveToken(username, refreshToken) {
    await db.none(`UPDATE tokens SET token = $2 WHERE username LIKE $1`, [username, refreshToken])
      .then(() => {
        console.log(`Все круто, записали токен для ${username} `)
      })
      .catch(() => {
        console.log('токен не записан')
      });

  }
  refreshToken(payload) {

  }
  validateAccessToken(token) {
    try {
      console.log('проверяю токен:', token)
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
      return null;
    }
  }
  async removeToken(refreshToken) {

  }

  async findToken(refreshToken) {
    return await db.query(`SELECT * FROM tokens WHERE token LIKE $1`, [refreshToken])
  }
}

module.exports = new tokenService();