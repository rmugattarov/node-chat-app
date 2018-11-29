var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('newMessage', function (newMsg) {
    console.log('newMessage', newMsg);
  });
});

socket.on('newMessage', function (newMsg) {
  console.log('newMessage', newMsg);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
