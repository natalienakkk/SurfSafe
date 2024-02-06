import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';


function Chat() {
  const router = useRouter()

  const [selectedChoice, setSelectedChoice] = useState('');
  const [messages, setMessages] = useState([]);
  const [choices, setChoices] = useState([]);
  
  useEffect(() => {
    // Reset the state to 'greeting' at the start of a new session
    const currentState = 'greeting';
    document.cookie = `currentState=${currentState}; path=/`;
    handleChoiceSelect('')
  }, []);
  
  const handleChoiceSelect = async (choice) => {
    setSelectedChoice(choice);
    setMessages([...messages, ` ${choice}`]);

    // Send the user response to the server and update the cookie based on the response
    const response = await fetch('/api/InputHandling', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userResponse: choice }),
      credentials: 'include', // Required for cookies to be sent and received
    });
    if (response.ok) {
      const data = await response.json();
      
    // Update the cookie with the new state
       document.cookie = `currentState=${data.nextState}; path=/`;
      setMessages(messages => [...messages, data.message]);
      setChoices(data.userChoices || []);}
    else {
      console.error('Error fetching choices');
  }
  };
  
  return (
    <div className="Chat">
      <div className="chat-box">
        <div className="chat-box-header">
          <img src="/sally-avatar.png" className = "bot-profile"></img>
          <h2 className = "bot-name"> Sally </h2>        
        </div>
        <div className="messages">
          {messages.map((msg, index) => (
              <div key={index} className={`message ${index % 2 === 1 ? 'bot-message' : 'user-message'}`} > {msg} </div>   
        ))} 
        </div>
        <div className="choices"> 
          {choices.map((choice, index) => (
          <button 
            key={index} 
            onClick={() => handleChoiceSelect(choice)} 
            className={`choice-button ${selectedChoice === choice ? 'selected' : ''}`}
            >
            {choice}
          </button>
          ))} </div>
      </div>
    </div>
  );
}

export default Chat;