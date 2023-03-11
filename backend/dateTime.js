// возвращает дату и время сервера в удобном формате
function datetime() {
    let datetime = new Date().toISOString().slice(0, 10)
    datetime += ' ' + new Date().toTimeString().slice(0, 8) + ' '
    return datetime
}
module.exports = datetime();