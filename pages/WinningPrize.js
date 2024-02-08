import ReusableModal from "../comps/ReusableModal";
import React, { useState } from "react";
import Modal from "react-modal";

const WinnigPrize = () => {
    const [prizePopUpIsOpen, setPrizePopUp] = useState(false);
    const [snextPopUp, setSnextPopUp] = useState(false);
    const openPrizePopUp =() => setPrizePopUp(true);
    const opensNextPopUp = () => setSnextPopUp(true);
    const closesNextPopUp = () => setSnextPopUp(false);
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
    const handleSubmit = (event) => {
       event.preventDefault();
      };

        const rightImageStyle = {
    width: '170px', // Specific width
    height: '170px', // Specific height
    // alignSelf: 'center', // Aligns this item (not align) in the center of the flex direction
    // marginLeft: 'auto', // This helps in pushing the image towards the center/right
    // marginRight: 'auto', // Use margin auto for centering in the available space
    margin: (250,0,0,150),
  };

    return (
      <>
        <div >
        <img src="ClickMe.png" alt="Click Me" style={rightImageStyle} role="button" onClick={()=>{openPrizePopUp()

console.log('They Clicked ME!!!!');
// TODO Shaden
}} /> 
        {/* <img src="/groupLesson.webp" alt="Group Lesson" role="button" onClick={setPopUpIsOpen}/> */}
          <Modal
            isOpen={prizePopUpIsOpen}
            onRequestClose={() => setPrizePopUp(false)}
            contentLabel="Prize"
          >
            <form onSubmit={handleSubmit}>
            <h1>Congratulations!!</h1>
            <p>You have won a prize!</p>
            <p>We need your home address to ensure a smooth delivery. Please provide the following details:</p>
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="streetAddress,city,state,zipCode"
            />
            </form>
            <button onClick={() => setPrizePopUp(false)}>Close</button>
            <button onClick={opensNextPopUp}>Submit</button>
            <ReusableModal
              isOpen={snextPopUp}
              onClose={closesNextPopUp}
              title="Warning Message"
              content="Attention: Your safety online is crucial!
              Entering your home address on random or untrustworthy websites can expose you to various risks and dangers.
              Please be cautious and avoid entering your home address or any personal information on random websites across the internet."
            />
          </Modal>
        </div>
      </>
    );
  };
  
  export default WinnigPrize;