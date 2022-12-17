// server.js
import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
import chat from "./controllers/chat";

// app
const app = express();
const http = require("http").createServer(app);

// socket io
const io = require("socket.io")(http, {
  path: "/socket.io",
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"],
  },
});

// middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// api routes
// make sure to install cors from npm before using api routes from your react client
app.get("/api", (req, res) => {
  res.send("node api");
});

// socket
chat(io);

const port = process.env.PORT || 8080;

http.listen(port, () => console.log(`Server running on port ${port}`));
