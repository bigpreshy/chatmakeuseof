const express = require("express");
const app = express();
const path = require("path");

const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(path.join(__dirname+"/public")));



io.on('connection', (socket) => {
  console.log('Connected');
    socket.on('sendChat', (msg) => {
      io.emit('sendChat', msg);
    
    });
  });


server.listen(3000, () => {
       console.log("Listen on the port 3000...");
   });
