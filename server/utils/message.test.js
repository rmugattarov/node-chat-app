const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
      var from = 'Bob';
      var lat = 99;
      var lng = 11;

      var message = generateLocationMessage(from, lat, lng);
      expect(message.from).toEqual(from);
      expect(message.url).toEqual('https://www.google.com/maps?q=99,11');
      expect(typeof message.createdAt).toBe('number');
  });
});
