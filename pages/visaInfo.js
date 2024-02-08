import ReusableModal from "../comps/ReusableModal";
import React, { useState } from "react";
import Modal from "react-modal";

const VisaInfo = () => {
    const [popUpIsOpen, setPopUpIsOpen] = useState(false);
    const [nextPopUp, setnextPopUp] = useState(false);
    const openNextPopUp = () => setnextPopUp(true);
    const closeNextPopUp = () => setnextPopUp(false);
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
    return (
      <>
        <div >
        <img src="/groupLesson.webp" alt="Group Lesson" role="button" onClick={openNextPopUp()}/>
          <Modal
            isOpen={popUpIsOpen}
            onRequestClose={() => setPopUpIsOpen(false)}
            contentLabel="Visa Info"
          >
            <p>Hello!
                Please enter Your credit card info:
            </p>
            <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Credit Card"
        />
            <button onClick={() => setPopUpIsOpen(false)}>Close</button>
            <button onClick={openNextPopUp}>Submit</button>
            <ReusableModal
              isOpen={nextPopUp}
              onClose={closeNextPopUp}
              title="Warning Message"
              content="Hey there! 

              We want to make sure you're staying safe online, especially when it comes to your personal information. Remember these tips:
              
               **Keep Your Card Close:** Never share your credit card info online unless a trusted adult says it's okay. It's like a secret code only grown-ups should handle.
              
               **Check Before You Click:** If a website feels weird or asks for too much info, ask a grown-up for help. It's better to be safe!
              
              **Look for the Lock:** When shopping or sharing on a website, check if there's a little lock in the address bar (https://). That means it's more secure!
              
              **Ask Questions:** If something seems fishy or you're not sure, don't be afraid to ask a parent, guardian, or teacher. They're there to help you.
              
              Remember, your safety is super important to us! If you ever feel unsure about anything online, it's okay to ask for help. Stay smart and have fun exploring the web! 🌐💙
              
              Cheers,
              Surf Safe Team"
            />
          </Modal>
        </div>
      </>
    );
  };
  
  export default VisaInfo;