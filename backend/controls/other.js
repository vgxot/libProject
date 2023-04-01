const stat = require("../stat/stat.json");


class other {
    async statistics(req, res) {
        let stat = require('../stat/stat.json')
        stat = JSON.stringify(stat)
        res.end(stat)
    }
    async date(req, res) {
        let date = new Date().toISOString().slice(0, 10)
        date = JSON.stringify(date)
        res.end(date)
    }
    async dateTime(req, res) {
        let datetime = new Date().toISOString().slice(0, 10)
        datetime += ' ' + new Date().toTimeString().slice(0, 8) + ' '
        datetime = JSON.stringify(datetime)
        res.end(datetime)
    }
}

module.exports = new other

