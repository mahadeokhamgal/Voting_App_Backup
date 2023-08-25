export default function chatCtrl($scope,socket) {
  console.log("chat control");
  socket.on('init', function (data) {
    console.log("event captured");
    console.log(data);
  });
  socket.emit('custom',"my message");
}
