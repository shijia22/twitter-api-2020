const express = require('express')
const cors = require('cors')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const app = express()
const PORT = process.env.PORT || 3000

const passport = require('./config/passport')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

// socket
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    credentials: true
  }
})

require('./utils/socketServer.js')(io)

app.get('/', (req, res) => res.send('Hello World!'))
server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

require('./routes')(app)

module.exports = app
