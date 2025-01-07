import React, { useState, useEffect } from "react";
import ChatbotToggle from "./ChatBotToggle";
import ChatWindow from "./ChatWindow";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [apiReplies, setApiReplies] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await fetch(
          "https://677bc6cb20824100c07ac1d0.mockapi.io/Chat"
        );
        if (response.ok) {
          const data = await response.json();
          setApiReplies(data);
        } else {
          console.error("Failed to fetch replies from the API");
        }
      } catch (error) {
        console.error("Error fetching API replies:", error);
      }
    };

    fetchReplies();
  }, []);

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, isBot: false };

      const matchingReply = apiReplies.find(
        (reply) => reply.question.toLowerCase() === input.toLowerCase()
      );

      const botMessage = matchingReply
        ? { text: matchingReply.answer, isBot: true }
        : {
            text: "I'm sorry, I don't have an answer for that. Can you try rephrasing?",
            isBot: true,
          };

      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <ChatbotToggle isVisible={isVisible} onToggle={setIsVisible} />
      {isVisible && (
        <ChatWindow
          messages={messages}
          input={input}
          onInputChange={(e) => setInput(e.target.value)}
          onSendMessage={handleSendMessage}
          onKeyDown={handleKeyDown}
          onClose={() => setIsVisible(false)}
        />
      )}
    </div>
  );
};

export default Chatbot;
