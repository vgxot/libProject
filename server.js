const express = require('express')
const path = require('path')
const app = express()           // инициализация экспресса

const PORT = 3000;



app.use(express.static((path.resolve(__dirname + '/frontend'))))
app.get('/', (res, req) => {
    app.sendFile(__dirname + '/frontend/html/main.html')
})


app.listen(PORT, () => console.log(`Сервер запущен. Порт ${PORT}`))