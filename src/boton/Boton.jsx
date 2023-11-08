import React, { useState } from 'react';
import './boton.css';
import Chatbot from 'react-chatbot-kit';

const Boton = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div>
      <button 
      className='appChatbotContainer'
      onClick={toggleChat}>Abrir/Cerrar Chat</button>
      {chatOpen && <Chatbot />} {}
    </div>
  );
};

export default Boton;
