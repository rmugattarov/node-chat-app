var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

});

socket.on('newMessage', function (newMsg) {
  console.log('newMessage', newMsg);
});

socket.emit('createMessage', {
  from: 'client',
  text: 'moo'
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
