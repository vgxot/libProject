const jwt = require('jsonwebtoken')
const db = require('../db/database')
class tokenControl {
    generateToken(payload) {    // создает токен авторизации, берет секретный ключ и устанавливает время его жизни
        console.log(payload)
        const accessToken = jwt.sign({name: payload}, '4CB89rnc3gt478yN4C8Ng87vny4t78YNG4c8tht94', {expiresIn: '30m'})
        const refreshToken = jwt.sign({name: payload}, 'crnGTN2R3H2GQB3T64YIHq80rty34cgT87IGN3R3Cc3', {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(username, refreshToken) {
        await db.none(`UPDATE users SET token = $1 WHERE username LIKE $2`, [refreshToken, username])
            .then(() => {
                console.log(`Все круто, записали токен для ${username} `)
            })
            .catch(() => {
                console.log('что-то не так, токен не записан')
            });
    }
}

module.exports = new tokenControl();
