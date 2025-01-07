const MessageInput = ({ input, onInputChange, onSendMessage, onKeyDown }) => {
    return (
      <div className="flex items-center bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md">
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message..."
          className="flex-1 bg-transparent border-none focus:outline-none text-black placeholder-gray-700 py-2 px-3 rounded-xl transition-transform duration-300 hover:scale-105 sm:text-sm md:text-base"
        />
        <button
          onClick={onSendMessage}
          className="ml-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-3 py-2 rounded-full shadow-lg hover:scale-105 transform transition hover:shadow-xl sm:px-3 sm:py-1 md:px-4 md:py-2"
        >
          Send
        </button>
      </div>
    );
  };
  
  export default MessageInput;
  