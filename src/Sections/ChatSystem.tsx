import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  CardMedia,
} from "@mui/material";
import {
  motion,
  AnimatePresence,
  useDeprecatedAnimatedState,
} from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";

import socket from "../components/socket";
import avatar from "../assets/avatar.png";
import { StringDecoder } from "string_decoder";
import { ClickAwayListener } from "@mui/base/";
type Message = {
  author: string;
  message: string;
};
type user = {
  connected: boolean;
  hasNewMessages: boolean;
  messages: [];
  self: boolean;
  userID: string;
  username: StringDecoder;
};

type openChat = {
  open: boolean;
  position: number;
  bottom: string;
};
export default function ChatSystem() {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [authorMessage, setAuthorMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [openChat, setOpenChat] = useState(false);
  const [openMainChat, setOpenMainChat] = useState(false);
  const [openChatCustomer, setOpenChatCustomer] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [typing, setTyping] = useState("");
  const [meUserIndex, setMeUserIndex] = useState(0);
  const [selectedUser, setSelectedUser] = useState<user>();

  // username click
  const handleUsernameClick = (user: user) => {
    if (user.self || !user.connected) return;
    setSelectedUser({ ...user, hasNewMessages: false });
    let allUsers = users;
    let index = allUsers.findIndex((u) => u.userID === user.userID);
    // console.log("INDEX => ", index);
    let foundUser = allUsers[index];
    foundUser.hasNewMessages = false;

    allUsers[index] = foundUser;
    setUsers([...allUsers]);
  };

  // first emit and on
  if (message) {
    socket.emit("typing", userEmail);
  }

  // handler message
  function handleMessage(event: React.ChangeEvent<HTMLInputElement>) {
    socket.emit("message", message);
    setMessage("");
  }

  // handler user email
  function handleUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.target.value);
  }
  // handle submit user email
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setAuthorMessage(userEmail);

    socket.auth = { userEmail };
    socket.connect();

    setTimeout(() => {
      if (socket.connected) {
        console.log("socket.connected", socket);
        setConnected(socket.connected);
      }
    }, 300);
  }

  // its console logged in all connected clients

  useEffect(() => {
    socket.on("message", (message: Message) => {
      console.log("message", message);
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  // User joined
  useEffect(() => {
    socket.on("user joined", (msg) => {
      console.log("frontend:", msg);
    });

    return () => {
      socket.off("user joined");
    };
  }, []);

  // handle typing
  useEffect(() => {
    socket.on("typing", (data) => {
      setTyping(data);
      setTimeout(() => {
        setTyping("");
      }, 1000);
    });

    return () => {
      socket.off("user joined");
    };
  }, []);

  console.log(typing, "typing...");

  // list of users
  useEffect(() => {
    // all users
    socket.on("users", (users) => {
      console.log("socket id", socket.id);
      users.forEach((user: any) => {
        user.self = user.userID === socket.id;
        user.connected = true;
        user.messages = [];
        user.hasNewMessages = false;
      });

      // when user connects
      socket.on("user connected", (user) => {
        user.connected = true;
        user.messages = [];
        user.hasNewMessages = false;

        setUsers((prevUsers: any) => [...prevUsers, user]);
      });

      setUsers(users);
    });
  }, []);

  console.log(openMainChat, openChat, "main AND OPEN");
  // Show duplicate username error
  socket.on("username taken", () => {
    alert("username taken");
  });

  console.log(meUserIndex, "indexxx");
  console.log(users, "users");

  // Show online offline users in client
  useEffect(() => {
    // when user disconnects
    setMeUserIndex(users.findIndex((user) => user.username === "alex"));
    socket.on("user disconnected", (id) => {
      let allUsers = users;
      let index = allUsers.findIndex((el) => el.userID === id);
      // console.log("INDEX => ", index);
      let foundUser = allUsers[index];
      foundUser.connected = false;

      allUsers[index] = foundUser;
      setUsers([...allUsers]);
    });

    return () => {
      socket.off("user disconnected");
    };
  }, [users, socket]);

  // Emit private message to server
  const handlePrivateMessage = () => {
    userEmail !== "alex"
      ? socket.emit("private message", {
          message: message,
          to: users[meUserIndex]?.userID,
        })
      : null;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          height: "50%",
          width: "65px",
          position: "fixed",
          right: "25px",
          bottom: "15px",
          gap: 1,
        }}
      >
        {users.map((user, index) => {
          return (
            // costumers chat
            <Box sx={{ display: "flex" }}>
              {openChat && selectedUser?.username === user.username ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: "fixed", zIndex: 2 }}
                  >
                    <Box
                      sx={{
                        position: "fixed",
                        right: "95px",
                        bottom: index * 150,
                        width: "250px",
                        background: "#181818",
                        boxShadow: "0px 15px 20px rgba(0,0,0.0.1)",
                        zIndex: 500,
                        borderRadius: "15px",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                          height: 40,
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            height: "7px",
                            width: "7px",
                            borderRadius: "50%",
                            bgcolor: users.find(
                              (user) => user?.username === "alex"
                            )
                              ? "green"
                              : "gray",
                            left: 64,
                            top: 5,
                          }}
                        />
                        <CardMedia
                          component="img"
                          image={avatar}
                          alt="Me"
                          sx={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />

                        <Typography
                          sx={{
                            color: "#fff",
                            lineHeight: "50px",
                            borderRadius: "15px 15px 0 0",
                            padding: "0 10px",
                            fontWeight: 500,
                            fontSize: 14,
                            position: "relative",
                            fontFamily: "Poppins",
                          }}
                        >
                          Alexander Garzo
                        </Typography>
                      </Box>

                      {/* Chat box */}
                      {connected ? (
                        <Box
                          sx={{
                            bgcolor: "#707070",
                            height: "200px",
                          }}
                        >
                          {/* messages box */}
                          <Box
                            sx={{
                              height: "200px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "start",
                              alignItems: "center",
                              px: 1,
                              overflowY: "scroll",
                            }}
                          >
                            <p
                              style={{
                                position: "absolute",
                                left: "5px",
                                bottom: "30px",
                                fontSize: 12,
                              }}
                            >
                              {typing}
                            </p>
                            {messages.map((message) => {
                              if (message.author === authorMessage) {
                                return (
                                  <>
                                    <Typography
                                      key={message.message}
                                      sx={{
                                        alignSelf: "end",
                                        fontSize: 15,
                                        padding: "3px",
                                        backgroundColor: "#fff",
                                        marginTop: "-5px",
                                        borderRadius: "5px",
                                        mt: 1,
                                      }}
                                    >
                                      {message.message}
                                    </Typography>
                                  </>
                                );
                              } else {
                                return (
                                  <>
                                    <Typography
                                      key={message.message}
                                      sx={{
                                        alignSelf: "start",
                                        fontSize: 15,
                                        padding: "3px",
                                        backgroundColor: "#262626",
                                        marginTop: "-5px",
                                        borderRadius: "5px",
                                        mt: 1,
                                        color: "#fff",
                                      }}
                                    >
                                      {message.message}
                                    </Typography>
                                  </>
                                );
                              }
                            })}
                          </Box>
                          {/* input message */}
                          <Box sx={{ display: "flex", height: "35px" }}>
                            <input
                              onChange={(e) => setMessage(e.target.value)}
                              style={{
                                height: "30px",
                                width: "85%",
                                border: "none",
                                outline: "none",
                                borderRadius: "0 0 0 15px",
                                background: "rgba(255,255,255,0.8)",
                                paddingLeft: "10px",
                                fontSize: 14,
                                fontFamily: "Poppins",
                              }}
                            />
                            <IconButton
                              sx={{
                                width: "30px",
                                height: "30px",
                                background: "#181818",
                                borderRadius: "0 0 15px 0",
                                transition: "0.3s",
                                "&:hover": {
                                  boxShadow: "0px 0px 5px #1976d2",
                                  background: "#181818",
                                },
                              }}
                              onClick={() => {
                                socket.emit("message", {
                                  author: authorMessage,
                                  message: message,
                                });
                                setMessage("");
                              }}
                            >
                              <SendIcon sx={{ color: "#fff" }} />
                            </IconButton>
                          </Box>
                        </Box>
                      ) : (
                        <Box sx={{ width: "350px", textAlign: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#131313",
                                fontSize: 20,
                                fontWeight: 500,
                                my: 6,
                              }}
                            >
                              Enter your email to get started
                            </Typography>
                            <Box
                              component="form"
                              onSubmit={(e: React.SyntheticEvent) =>
                                handleSubmit(e)
                              }
                            >
                              <Box>
                                <TextField
                                  sx={{ width: "275px" }}
                                  variant="standard"
                                  label="Email"
                                  required
                                  onChange={handleUserEmail}

                                  // type="email"
                                />
                              </Box>
                              <Button
                                sx={{
                                  mt: 3,
                                  color: "#fff",
                                  background:
                                    "-webkit-linear-gradient(left, #371F97, #7D00FF )",
                                }}
                                type="submit"
                              >
                                Start Chat
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </motion.div>
                </AnimatePresence>
              ) : null}

              <IconButton
                onClick={() => {
                  setOpenChat(!openChat);
                  setSelectedUser(user);
                }}
                sx={{
                  background:
                    "-webkit-linear-gradient(left, #371F97, #1976d2 )",
                  zIndex: 2,
                  width: "60px",
                  height: "60px",
                  color: "#131313",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0px 0px 8px #1976d2",
                  },
                }}
              >
                <MessageIcon
                  sx={{
                    width: "35px",
                    height: "35px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                />
              </IconButton>
            </Box>
          );
        })}

        {/* main chat button */}

        <IconButton
          onClick={() => setOpenMainChat(!openMainChat)}
          sx={{
            background: "-webkit-linear-gradient(left, red, #1976d2 )",
            zIndex: 2,
            width: "60px",
            height: "60px",
            color: "#131313",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0px 0px 8px #1976d2",
            },
          }}
        >
          <MessageIcon
            sx={{
              width: "35px",
              height: "35px",
              color: "rgba(255,255,255,0.85)",
            }}
          />
        </IconButton>

        {openMainChat && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: "fixed", zIndex: 2 }}
            >
              <ClickAwayListener onClickAway={() => setOpenMainChat(false)}>
                <Box
                  sx={{
                    position: "fixed",
                    right: "95px",
                    bottom: "62px",
                    width: "250px",
                    background: "#181818",
                    boxShadow: "0px 15px 20px rgba(0,0,0.0.1)",
                    zIndex: 500,
                    borderRadius: "15px",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      height: 40,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        height: "7px",
                        width: "7px",
                        borderRadius: "50%",
                        bgcolor: users.find((user) => user?.username === "alex")
                          ? "green"
                          : "gray",
                        left: 64,
                        top: 5,
                      }}
                    />
                    <CardMedia
                      component="img"
                      image={avatar}
                      alt="Me"
                      sx={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#fff",
                        lineHeight: "50px",
                        borderRadius: "15px 15px 0 0",
                        padding: "0 10px",
                        fontWeight: 500,
                        fontSize: 14,
                        position: "relative",
                        fontFamily: "Poppins",
                      }}
                    >
                      Alexander Garzo
                    </Typography>
                  </Box>

                  {/* Chat box */}
                  {connected ? (
                    <Box
                      sx={{
                        bgcolor: "#707070",
                        height: "200px",
                      }}
                    >
                      {/* messages box */}
                      <Box
                        sx={{
                          height: "200px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                          alignItems: "center",
                          px: 1,
                          overflowY: "scroll",
                        }}
                      >
                        <p
                          style={{
                            position: "absolute",
                            left: "5px",
                            bottom: "30px",
                            fontSize: 12,
                          }}
                        >
                          {typing}
                        </p>
                        {messages.map((message) => {
                          if (message.author === authorMessage) {
                            return (
                              <>
                                <Typography
                                  key={message.message}
                                  sx={{
                                    alignSelf: "end",
                                    fontSize: 15,
                                    padding: "3px",
                                    backgroundColor: "#fff",
                                    marginTop: "-5px",
                                    borderRadius: "5px",
                                    mt: 1,
                                  }}
                                >
                                  {message.message}
                                </Typography>
                              </>
                            );
                          } else {
                            return (
                              <>
                                <Typography
                                  key={message.message}
                                  sx={{
                                    alignSelf: "start",
                                    fontSize: 15,
                                    padding: "3px",
                                    backgroundColor: "#262626",
                                    marginTop: "-5px",
                                    borderRadius: "5px",
                                    mt: 1,
                                    color: "#fff",
                                  }}
                                >
                                  {message.message}
                                </Typography>
                              </>
                            );
                          }
                        })}
                      </Box>
                      {/* input message */}
                      <Box sx={{ display: "flex", height: "35px" }}>
                        <input
                          onChange={(e) => setMessage(e.target.value)}
                          style={{
                            height: "30px",
                            width: "85%",
                            border: "none",
                            outline: "none",
                            borderRadius: "0 0 0 15px",
                            background: "rgba(255,255,255,0.8)",
                            paddingLeft: "10px",
                            fontSize: 14,
                            fontFamily: "Poppins",
                          }}
                        />
                        <IconButton
                          sx={{
                            width: "30px",
                            height: "30px",
                            background: "#181818",
                            borderRadius: "0 0 15px 0",
                            transition: "0.3s",
                            "&:hover": {
                              boxShadow: "0px 0px 5px #1976d2",
                              background: "#181818",
                            },
                          }}
                          onClick={() => {
                            socket.emit("message", {
                              author: authorMessage,
                              message: message,
                            });
                            setMessage("");
                          }}
                        >
                          <SendIcon sx={{ color: "#fff" }} />
                        </IconButton>
                      </Box>
                    </Box>
                  ) : (
                    <Box sx={{ width: "350px", textAlign: "center" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#131313",
                            fontSize: 20,
                            fontWeight: 500,
                            my: 6,
                          }}
                        >
                          Enter your email to get started
                        </Typography>
                        <Box
                          component="form"
                          onSubmit={(e: React.SyntheticEvent) =>
                            handleSubmit(e)
                          }
                        >
                          <Box>
                            <TextField
                              sx={{ width: "275px" }}
                              variant="standard"
                              label="Email"
                              required
                              onChange={handleUserEmail}

                              // type="email"
                            />
                          </Box>
                          <Button
                            sx={{
                              mt: 3,
                              color: "#fff",
                              background:
                                "-webkit-linear-gradient(left, #371F97, #7D00FF )",
                            }}
                            type="submit"
                          >
                            Start Chat
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              </ClickAwayListener>
            </motion.div>
          </AnimatePresence>
        )}
      </Box>
    </>
  );
}
