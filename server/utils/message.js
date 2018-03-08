var moment = require('moment')

var generateMessage = (from, text) => {
 return {
     text: text,
     from: from,
     createdAt: moment().valueOf()
 }
}

var generateLocationMessage = (from, latitude,longitude) =>{

    return {
        from,
        url:`https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    
    }
}


module.exports = {
    generateMessage,
    generateLocationMessage
}