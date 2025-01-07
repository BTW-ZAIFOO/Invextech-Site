import React from "react";
import { FaTimes } from "react-icons/fa";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatWindow = ({
  messages,
  input,
  onInputChange,
  onSendMessage,
  onKeyDown,
  onClose,
}) => {
  return (
    <div className="fixed bottom-5 right-5 w-[90%] max-w-[380px] bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl z-50 border-none transition-transform transform hover:scale-105 duration-300">
      <div className="relative flex flex-col h-auto p-5 text-slate-900">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-4 border-b border-white/30">
          <h2 className="text-xl font-semibold tracking-wide text-gradient">
            Chat Assistant
          </h2>
          <button
            onClick={onClose}
            className="text-slate-900 hover:text-gray-300 transition duration-200"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto mt-4 pr-3 space-y-4 max-h-[60vh] scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent">
          <MessageList messages={messages} />
        </div>

        {/* Input Section */}
        <div className="mt-4">
          <MessageInput
            input={input}
            onInputChange={onInputChange}
            onSendMessage={onSendMessage}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
