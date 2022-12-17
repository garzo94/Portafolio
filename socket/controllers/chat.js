// controllers/chat.js
const chat = (io) => {
  //  middleware
  io.use((socket, next) => {
    // console.log("connected to SOCKET", socket.handshake); // headers, query, auth etc
    const username = socket.handshake.auth.userEmail;
    if (!username) {
      return next(new Error("invalid username"));
    }
    socket.username = username;
    console.log("socket.username in middleware", socket.username);
    next();
  });
  //  connection
  io.on("connection", (socket) => {
    console.log("socket id", socket.id);
    // user email
    socket.on("username", (username, author) => {
      //   console.log("username", username);
      // you can emit this user to all connected clients
      socket.broadcast.emit("user joined", `${username}`);
    });

    // handle users
    let users = [];
    for (let [id, socket] of io.of("/").sockets) {
      const existingUser = users.find((u) => u.username == socket.username);
      if (existingUser) {
        socket.emit("username taken");
        socket.disconnect();
        console.log(`username => ${socket.username} is taken!`);
        return;
      } else {
        users.push({
          userID: id,
          username: socket.username,
        });
      }
    }

    console.log("USERS AFTER CONNECTION => ", users); // see console
    socket.emit("users", users);
    // now each time a username is submitted
    // it will be added to users array
    // it can be sent/emit to all clients
    // to display total list of users currently online

    // when a new user joins, notify existing users
    socket.broadcast.emit("user connected", {
      userID: socket.id,
      username: socket.username,
    });

    // user typing...
    socket.on("typing", (username) => {
      console.log("typing user", username);
      socket.broadcast.emit("typing", `${username} is typing...`);
    });

    // Receive message and broadcast to all clients
    socket.on("message", (message) => {
      io.emit("message", message);
    });
    // disconnect
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });
};

export default chat;
