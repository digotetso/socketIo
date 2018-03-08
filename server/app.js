const hbs = require('hbs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http')

const {generateMessage,generateLocationMessage} = require('./utils/message')

var port = process.env.PORT || 3000;

var app = express()

var publicPath = path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(express.static(publicPath))


var server = http.createServer(app)

var io = socketIO(server)

//listen to connection event
io.on('connection', (socket) => {
    console.log('server connected')

   socket.emit('newMessage', generateMessage('Admin', 'Welcome to chatApp'))

   socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined the group'))

    socket.on('disconnect', () => {
        console.log('Server disconnected...')
    })
//create custom event, Listener(listen to "createEmail" event)
socket.on('createMessage', (email, callback) => {
    console.log('from client: ',email)
 //emit message to all connected user
    io.emit('newMessage', generateMessage(email.from, email.text))
    callback()
})

socket.on('currentLocation', (coords) =>{
  io.emit('newLocationMessage', generateLocationMessage('Admin',coords.latitude,coords.longitude))
})

})




server.listen(port, () => {
    console.log(`server started on port ${port}`)
})