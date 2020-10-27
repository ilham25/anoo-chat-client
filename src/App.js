import { useEffect, useState } from "react";

import ChatContainer from "./components/ChatContainer";
import InputContainer from "./components/InputContainer";
import Navbar from "./components/Navbar";
import "./styles/style.css";

import SocketIo from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

function App() {
  const io = SocketIo(ENDPOINT);
  const [chatList, setChatList] = useState([]);

  if (chatList.length >= 10) {
    chatList.shift();
  }
  useEffect(() => {
    io.on("chat received", (usr, msg) => {
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
