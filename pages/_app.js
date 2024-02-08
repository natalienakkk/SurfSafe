
import styles from '../styles/App.css'

import React, { useState, useEffect } from 'react';

function App() {
const [messages, setMessages] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [choices, setChoices] = useState([])
  const [cookie, setCookie] =useState(null);

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
      if (data.message === "true"){
        console.log("helloooooooooooooooooooooooooo");
      }

      // Update the cookie with the new stat
      else{
      document.cookie = `currentState=${data.nextState}; path=/`;
      if (choice!==''){setMessages(messages => [...messages, data.message]);}
      setChoices(data.userChoices || []);}
    } else {
      console.error('Error fetching choices');
    }
  };


  const getNextChoices = (choice) => {
    if (choice === 'Choice 1') {
      return ['Choice 1.1', 'Choice 1.2'];
    } else if (choice === 'Choice 2') {
      return ['Choice 2.1', 'Choice 2.2', 'Choice 2.3'];
    } else {
      return ['Choice 3.1'];
    }
  };

  const handleSend = () => {
    console.log('User selected:', selectedChoice);
    // send the choice to the backend
  };

  return (
    <div className="App">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">{msg}</div>
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
        <button onClick={handleSend} className="send-button" disabled={!selectedChoice}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;