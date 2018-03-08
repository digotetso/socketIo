var socket = io()
// listen to connect event
socket.on('connect' , function () {
console.log('New user connected')
})
socket.on('newMessage', function(message) {
console.log(message)
//create element(li) with jQuery
var li = $('<li></li>')
li.text(`${message.from}: ${message.text}`)
//select element of id="message"
$('#message').append(li)
})


socket.on('disconnect', function () {
    console.log('disconnected from the server...')
})

//select form by id
//create event listener

    $( "button" ).click(function() {
        $( "#message-form" ).submit();
        socket.emit('createMessage', {
            from: 'Morning ',
            text: $('[name=message]').val()
        }, () => {
            console.log('everything went well..')
        }
        )
        $('[name=message]').val()
    });
