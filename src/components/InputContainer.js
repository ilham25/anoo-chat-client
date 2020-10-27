import { useState } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001";

export default function InputContainer() {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const socket = socketIOClient(ENDPOINT);
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <div className="input-container">
      <form onSubmit={sendMessage}>
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
