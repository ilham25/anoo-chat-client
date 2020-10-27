import { useEffect, useState } from "react";

import ChatContainer from "./components/ChatContainer";
import InputContainer from "./components/InputContainer";
import Navbar from "./components/Navbar";
import "./styles/style.css";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

function App() {
  const socket = socketIOClient(ENDPOINT);
  const [chatList, setChatList] = useState([]);

  socket.on("chat message", (msg) => {
    console.log("received : ", msg);
    // setChatList((chatList) => [
    //   ...chatList,
    //   {
    //     id: Math.floor(Math.random() * 10000),
    //     msg,
    //   },
    // ]);
  });
  useEffect(() => {
    console.log("chatList : ", chatList);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ChatContainer>
        {chatList.map((chat) => (
          <div className="chat" key={chat.id}>
            <h5 className="username">User</h5>
            <p className="message">{chat.msg}</p>
          </div>
        ))}
      </ChatContainer>
      <InputContainer />
    </div>
  );
}

export default App;
