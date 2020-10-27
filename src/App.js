import ChatContainer from "./components/ChatContainer";
import InputContainer from "./components/InputContainer";
import Navbar from "./components/Navbar";
import "./styles/style.css";

function App() {
  const dummyChat = [
    {
      username: "iruha",
      message: "mantap gan",
    },
    {
      username: "reimu",
      message: "apaan njir",
    },
    {
      username: "aoi",
      message: "punten numpang lewat gan",
    },
    {
      username: "bizuu",
      message: "aoakwoawk numpang chat",
    },
    {
      username: "sariel",
      message: "yehee masuk tipi",
    },
    {
      username: "gaskeun",
      message: "dummy text",
    },
    {
      username: "mri_vein",
      message: "naisu bisa",
    },
    {
      username: "code_essen",
      message: "im the bone of my sword",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <ChatContainer>
        {dummyChat.map((chat) => (
          <div className="chat">
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
