const express = require('express')
const path = require('path')
const router = require(__dirname + '/routes/user.routes')
const app = express()
const cors = require('cors')
const PORT = 3000;

app.use(express.json())
app.use(cors())
app.use('/api', router)
app.use(express.static((path.resolve(__dirname + '/../frontend'))))

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../frontend/main.html'))
    res.status(200)
})

app.listen(PORT, () => console.log(`Сервер запущен. Порт ${PORT}`))