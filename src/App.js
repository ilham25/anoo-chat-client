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

  useEffect(() => {
    socket.on("chat received", (usr, msg) => {
      setChatList((oldChatList) => [
        ...oldChatList,
        {
          usr,
          msg,
        },
      ]);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ChatContainer>
        {chatList.map((chat, index) => (
          <div className="chat" key={index}>
            <h5 className="username">{chat.usr}</h5>
            <p className="message">{chat.msg}</p>
          </div>
        ))}
      </ChatContainer>
      <InputContainer />
    </div>
  );
}

export default App;
