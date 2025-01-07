const MessageInput = ({ input, onInputChange, onSendMessage, onKeyDown }) => {
    return (
      <div className="flex items-center bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md">
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message..."
          className="flex-1 bg-transparent border-none focus:outline-none text-black placeholder-gray-700 py-2 px-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        />
        <button
          onClick={onSendMessage}
          className="ml-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transform transition hover:shadow-xl"
        >
          Send
        </button>
      </div>
    );
  };
  
  export default MessageInput;
  