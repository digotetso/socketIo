var socket = io()
// listen to connect event
socket.on('connect' , function () {
console.log('New user connected')
})
socket.on('newMessage', function(email) {
console.log(email)
})


socket.on('disconnect', function () {
    console.log('disconnected from the server...')
})