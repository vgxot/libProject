const jwt = require('jsonwebtoken')
const db = require('../db/database')
class TokenControl {
    generateToken(payload) {    // создает токен авторизации, берет секретный ключ и устанавливает время его жизни
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expireIn:'60m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expireIn:'60d'})
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(username, refreshToken) {
        await db.none(`UPDATE users SET token = $1 WHERE username LIKE $2`, [refreshToken, username])
            .then(() => {
                console.log(`Все круто, ${username} `)
            })
            .catch(() => {
                console.log('что-то не так')
            });
    }
}

module.exports = TokenControl();