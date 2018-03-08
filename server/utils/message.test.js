var expect = require('expect')


var {generateMessage, generateLocationMessage} = require('./message')


describe('generate message', () => {

    it('It should generate correct message object', () => {
        
            var from = "dee";
            var text = "hello";
            var message = generateMessage(from,text)
        
            //make assertion
        
            expect(message).toInclude({from, text});
            expect(message.createdAt).toBeA('number')
        })
})


describe('generate Location message', () => {
    it('it should generate correct location object', () => {
        var latitude = -24.2;
        var longitude = 25.5;
        var from = 'Admin';
        var url = `https://www.google.com/maps?q=-24.2,25.5`

        var locationMessage = generateLocationMessage(from, latitude, longitude)

        expect(locationMessage.createdAt).toBeA('number')
        expect(locationMessage.url).toBe(`https://www.google.com/maps?q=-24.2,25.5`)
        expect(locationMessage).toInclude({from,url})



    })
})
