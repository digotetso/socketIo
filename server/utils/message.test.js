var expect = require('expect')


var {generateMessage} = require('./message')


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