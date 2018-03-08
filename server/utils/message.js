var generateMessage = (from, text) => {
 return {
     text: text,
     from: from,
     createdAt: new Date().getTime()
 }
}

module.exports = {
    generateMessage
}