import Head from 'next/head'
import { useState, useEffect } from 'react';


function Chat() {

  // Test Data
  const storyData = [
    {
      id: 0,
      botMessage: "Welcome to our story! How do you feel today?",
      choices: [
        "Happy",
        "Sad",
        "Excited"
      ],
      next: 1 // Indicates the next step in the story
    },
    {
      id: 1,
      botMessage: "That's great to hear! What do you want to do next?",
      choices: [
        "Go on an adventure",
        "Read a book"
      ],
      next: null // the end of the story
    },
    // Add ?
  ];
  const [selectedChoice, setSelectedChoice] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: storyData[0].botMessage } ]);
  const [choices, setChoices] = useState(storyData[0].choices);
  const [currentStep, setCurrentStep] = useState(0);
  //const [cookie, setCookie] = useState(null);
  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };
  /*
  const handleChoiceSelect = (choice) => {
    const updatedMessages = [...messages, { sender: 'user', text: choice }];
    // Find the next step based on the currentStep and mock data
    const nextStep = storyData.find(step => step.id === storyData[currentStep].next);

      if (nextStep) {
        // Add bot's response to the messages
        updatedMessages.push({ sender: 'bot', text: nextStep.botMessage });
        // Update choices for the next step
        setChoices(nextStep.choices);
        // Move to the next step
        setCurrentStep(nextStep.id);
      } else {
        // Handle end of story or no further choices
        setChoices(["The End."]);
      }
    
      setMessages(updatedMessages);
    };*/
    //const nextStep = currentStep + 1;
    //if (nextStep < story.length) {
    //  setCurrentStep(nextStep);
    //  setChoices(story[nextStep].choices);
    //} else {
      // End of story or handle as needed
    //}   
  /*
  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    setMessages([...messages, `You selected: ${choice}`]);
    const testChatApi = async (choice) => {
      const headers = {
        'Content-Type': 'application/json',
      };
      // Include the cookie in the request if it exists
      if (cookie) {
        headers.Cookie = cookie;
      }

      const response = await fetch('/api/InputHandling', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ choice }),
      });

      // Check if the response has set a new cookie and update state
      const newCookie = response.headers.get('Set-Cookie');
      if (newCookie) {
        setCookie(newCookie);
      }

      if (response != "I'm not sure how to respond to that.") {
        const data = await response.json();
        console.log("response: ",data);
        // Update your state with the new choices from the backend
        setChoices(data.nextChoices);
      } else {
        console.log("heyyyyyyyyyyyyyyy");
        // Handle any errors
        console.error('Error fetching choices');
      }
    };
    testChatApi(choice);
  };*/
  const handleSend = () => {
    if (!selectedChoice) return; // Prevents sending without a choice

    // Proceed using the selectedChoice
    const updatedMessages = [...messages, { sender: 'user', text: selectedChoice }];

    const nextStep = storyData.find(step => step.id === storyData[currentStep].next);

    if (nextStep) {
      updatedMessages.push({ sender: 'bot', text: nextStep.botMessage });
      setChoices(nextStep.choices);
      setCurrentStep(nextStep.id);
    } else {
      setChoices(["the end!"]);
    }

    setMessages(updatedMessages);
    setSelectedChoice(''); // Reset selectedChoice after sending
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
            <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
              {msg.text}
            </div>
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

export default Chat;