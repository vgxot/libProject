// возвращает дату и время сервера в удобном формате
class getDateTime {
    dateTime() {
        let datetime = new Date().toISOString().slice(0, 10)
        datetime += ' ' + new Date().toTimeString().slice(0, 8) + ' '
        return datetime
    }
    date() {
        return new Date().toISOString().slice(0, 10)
    }
    time() {
        return new Date().toTimeString().slice(0, 8)
    }
}

module.exports = new getDateTime();