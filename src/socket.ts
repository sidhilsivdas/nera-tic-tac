import { SocketControllers } from 'socket-controllers';
import { Server } from "socket.io";
import {Container} from 'typedi';

export default (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  // io.on("connection", (socket) => {

  // });

//   useSocketServer(io, { controllers: [__dirname + "/api/controllers/*.ts"] });
  new SocketControllers({
    io,
    port: 3000,
    container: Container, 
    controllers: [__dirname + '/controllers/*.ts'],
  }); // registers all given controllers

  return io;
};