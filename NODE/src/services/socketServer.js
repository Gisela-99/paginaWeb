import { Server } from 'socket.io';


export function startSocketServer(){
    const io = new Server({
    cors: {
      origin: "http://localhost:5173"
    }
  });

  io.listen(4000);

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message-from-front', (text) => {
      console.log('message from front', text);
      io.emit('message-from-back', 'Hello from the back');
    });
  });
}
