const hbs = require('hbs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http')

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
    socket.on('disconnect', () => {
        console.log('Server disconnected...')
    })
//create custom event, Listener(listen to "createEmail" event)
socket.on('createMessage', (email) => {
    console.log('from client: ',email)
 //emit message to all connected user
    io.emit('newMessage', {
        from: email.from,
        text: email.text,
        createdAt: new Date().getDate()
    })
})
//create event emitter, custom event
//emit message a single user
// socket.emit('newMessage', {
//     from: 'pro.digmatema@gmail.com',
//     texr: 'Socket.io is the best',
//     createdAt: '13:00'
// })

})


server.listen(port, () => {
    console.log(`server started on port ${port}`)
})