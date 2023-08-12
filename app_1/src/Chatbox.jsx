import React, { useState } from 'react';
import './Chatbox.css'; // Create a CSS file for styling

function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: inputMessage, isUser: true },
        { text: "Typing...", isUser: false } // Placeholder for chatbot response
      ]);
      setInputMessage("");
      simulateChatbotResponse(inputMessage);
    }
  };

  const simulateChatbotResponse = (userMessage) => {
    // Simulate a chatbot response here
    setTimeout(() => {
      const newMessages = [...messages];
      newMessages[newMessages.length - 1] = { text: "Chatbot response...", isUser: false };
      setMessages(newMessages);
    }, 1000); // Simulated response delay
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? "user-message" : "bot-message"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;