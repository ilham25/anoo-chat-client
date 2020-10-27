import { useState } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001";

export default function InputContainer() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const socket = socketIOClient(ENDPOINT);

  const sendMessage = (e) => {
    e.preventDefault();
    message === "" || username === ""
      ? alert("Username or message are blank!")
      : socket.emit("chat message", username, message);
    setMessage("");
  };

  return (
    <div className="input-container">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          className="username-input"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
