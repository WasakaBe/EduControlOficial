import React, { useState } from 'react';
import { FaArrowAltCircleRight,FaCommentAlt } from 'react-icons/fa';
import './Chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'p. m.' : 'a. m.';
    if (hours > 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
  
    return `${hours}:${minutes} ${period}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const currentTime = getCurrentTime();
    const userMessage = { text: newMessage, sender: 'user', time: currentTime };
    const botResponse = handleBotResponse(newMessage);

    // Agrega las clases user o bot según el remitente
    setMessages([...messages, userMessage, { ...botResponse, sender: 'bot' }]);

    setNewMessage('');
  };

  const handleBotResponse = (userMessage) => {
    let botMessage = '';

    if (userMessage.toLowerCase().includes('ayuda')) {
      botMessage = '¿En qué puedo ayudarte?';
    } else if (userMessage.toLowerCase().includes('problema')) {
      botMessage = 'Parece que tienes un problema. ¿Puedes proporcionar más detalles?';
    } else {
      botMessage = 'Lo siento, no entiendo. ¿Puedes reformular tu pregunta?';
    }

    const currentTime = getCurrentTime();
    return { text: botMessage, sender: 'bot', time: currentTime };
  };


  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
       <div className={`chat-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <FaCommentAlt />
      </div>
      
      {!isChatOpen  && (
        <div className='chat-container'>
          <div className="chat-header">
            <h2>Chat</h2>
            <button className='minimize-button' onClick={toggleChat}>
              X
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <span className='message-sender'>{message.sender}: </span>
                <span className='message-text'>{message.text}</span>
                <span className='message-time'>{message.time}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
