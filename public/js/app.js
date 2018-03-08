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


socket.on('newLocationMessage', function(message) {
    var li = $('<li></li>')
    var a = $('<a target="_blank">My current location</a>') //_blank --> will open link in different tab
    li.text(`${message.from}`)  
    a.attr('href', message.url)  //set href= massage.url
    li.append(a)
    $('#message').append(li)
    


})
//select form by id
//create event listener
  var messageTextbox =$('[name=message]')
  
    $("#message-button" ).click(function() {
        $( "#message-form" ).submit();
        socket.emit('createMessage', {
            from: 'Morning ',
            text: messageTextbox.val()
        }, () => {
            console.log('everything went well..')
            messageTextbox.val('')
            
        }
        )
    });


  var locationButton = $("#location-button")
    locationButton.click(function(){
        if(!navigator.geolocation){
            return alert('Your broswer does not support location service')
        }
        locationButton.attr('disabled', 'disabled').text('sending location...')
        navigator.geolocation.getCurrentPosition(function(myLocation) {
            locationButton.removeAttr('disabled').text('send location')
            socket.emit('currentLocation', {
                latitude: myLocation.coords.latitude,
                longitude: myLocation.coords.longitude
            })
        }, function() {
            locationButton.attr('disabled', 'disabled').text('Send location')
            alert('cannot fetch location data')
        })
    })