import { useEffect, useState } from "react";
import Api from "./utils/api";

import ChatContainer from "./components/ChatContainer";
import InputContainer from "./components/InputContainer";
import Navbar from "./components/Navbar";
import "./styles/style.css";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

function App() {
  const socket = socketIOClient(ENDPOINT);
  const [chatList, setChatList] = useState([]);
  const getChatList = () => {
    Api.get("/").then((response) => {
      // console.log(response.data);
      setChatList(response.data);
    });
  };

  useEffect(() => {
    getChatList();
    socket.on("chat received", (result) => {
      getChatList();
    });
    console.log(chatList);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ChatContainer>
        {chatList.map((chat) => (
          <div className="chat" key={chat.id}>
            <h5 className="username">{chat.username}</h5>
            <p className="message">{chat.message}</p>
          </div>
        ))}
      </ChatContainer>
      <InputContainer />
    </div>
  );
}

export default App;
