const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'John Doe';
    var text = 'Henlo!';

    var message = generateMessage(from, text);
    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
    expect(typeof message.createdAt).toBe('number');
  });
});
