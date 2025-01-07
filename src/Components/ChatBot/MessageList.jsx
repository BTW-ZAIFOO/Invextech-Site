const MessageList = ({ messages }) => {
    return (
      <div className="space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl animate-fade-in message-bubble ${
              msg.isBot
                ? "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 text-white shadow-lg"
                : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white self-end shadow-md"
            } max-w-[80%]`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    );
  };
  
  export default MessageList;
  