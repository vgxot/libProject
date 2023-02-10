const express = require('express')
const router = require(__dirname + '/routes/routes')
const app = express()
const cors = require('cors')
const PORT = 3001;

app.use(express.json())
app.use(cors())
app.use('/api', router)
app.listen(PORT, () => console.log(`Сервер запущен. Порт ${PORT}`))
