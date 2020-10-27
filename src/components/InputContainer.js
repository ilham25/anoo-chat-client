import { useState } from "react";

export default function InputContainer() {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
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
