const db = require('database')
const express = require('express')
const app = express()
// по идее эта штука будет выполнять все операции с юзерами

app.get('/api/users', (req, res) => {
    console.log(res.body);

    db.none('INSERT INTO users(username, name, password, reg_time, reg_date) VALUES($1, $2, $3, $4)'
        , [username, name, time(), date()])
        .then(() => {
            console.log('Все круто, в базу записали')
            res.end('ok');
        })
        .catch(() => {
            console.log('не работает')
            res.end('error');
        });
    res.status(200);
})