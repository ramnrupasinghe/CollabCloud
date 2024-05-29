import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className="chat-message">
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage;
