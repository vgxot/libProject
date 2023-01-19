const db = require('/backend/database/database')

// по идее эта штука будет выполнять все операции с юзерами

app.get('/api/users', (req, res) => {
    const {username, name} = req.body
    db.none('INSERT INTO users("username", "name", "reg_time", "reg_date") VALUES($1, $2, $3, $4)'
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