import Head from 'next/head'
import styles from '../styles/WebsiteSimulation.module.css'
import ReusableModal from "../comps/ReusableModal";
import React, { useState } from "react";
import Modal from "react-modal";

// import VisaInfo from "./visaInfo";
function SimulationIntro() {
  return (
    <div className={styles.ContainerSimulationIntro}>
      <div className={styles.ParaIntroSimulation}>
        <p className={styles.SingleParaSimulation}>Embark on an everyday online journey on our page, where
          things are not always as they seem.<br></br>
          Navigate through what appears to be a typical webpage,
          click on links and explore content as you would anywhere on the internet.
          <br></br>
          <br></br>
          But here's the twist: some links are there to test your cyber smarts.
          Will you click on them? Every choice you make is a
          chance to learn—about the right clicks and the risky ones.</p>
      </div>
      <div className={styles.ImgIntroSimulation}>
        <img src="mapSurfing.webp" alt="description" />
        <p className={styles.UnderImg}>Dive in, explore, and let's see how internet-smart you can be!</p>
      </div>
    </div>
  );
}

// TODO: add the buy buttons anc connect them to the pop up explaining why this is a risky link

function PurchaseButtonPopUp() {
  // TODO Shaden - Pop Up 
  // When the User tries to purchase the group lesson, 
  // this button open a pop up that asks for the user visa card with a sumbit button, 
  // if the user types a use card and sumbits, it displays a warning explaining the risk
  console.log('Button clicked!')
}

function JoinForFreeButton() {
  //TODO Shaden - Pop up
  // explain the risk - this is a free lesson one on one, with camera remotly!!
  // Dont open camera for strangers! this smells fishy!!!
  console.log('Button clicked!')
}

function EducationalSection() {
  // Group lesson, works! 
  const [purchacePopUp, setPurchacePopUp] = useState(false);
  const openPurchacePopUp = () => setPurchacePopUp(true);
  const closePurchacePopUp = () => setPurchacePopUp(false);

  //One on One  lesson, ERROR! 

  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [nextPopUp, setnextPopUp] = useState(false);
  const openNextPopUp = () => setnextPopUp(true);
  const closeNextPopUp = () => setnextPopUp(false);
  const [inputValue, setInputValue] = useState('');

  const openFreePopUp = () => setPopUpIsOpen(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const VisaModal = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 700,
    },
  };


  return (<div>
    <div className={styles.ServicesContainer}>

      <div className={styles.SingleService}>
        <img src="/privateLesson.webp" alt="Group Lesson" role="button" onClick={() => openPurchacePopUp()} />
        {/* <div> */}
        {/* <VisaInfo/> */}
        {/* </div> */}
        <p className={styles.SingleServiceDetails}>
          Experience personalized growth with a FREE one-on-one lesson,
          all while using your camera! Dive in, engage, and excel!
        </p>
        <br></br>
        <br></br>
        <div>
          <button className={styles.PurchaseButton} onClick={() => openPurchacePopUp()}>Join Now FREE!</button>
        </div>
      </div>
      <div className={styles.SingleService}>
        <img src="/groupLesson.webp" alt="One on One Lesson" role="button" onClick={openNextPopUp} />
        <p className={styles.SingleServiceDetails}>
          Boost your skills in a fun group setting!
          Buy a Group Lesson now—learn together, save money, and make new friends.
        </p>
        <br></br>
        <br></br>
        <button className={styles.PurchaseButton} onClick={() => { (openFreePopUp(), console.log("clickeeed!!!")) }}>Join The Fun</button>
      </div>
    </div>

    {/* This is the free Option  */}
    <ReusableModal
      isOpen={purchacePopUp}
      onClose={closePurchacePopUp}
      title="Warning Message"
      content="
      Please be aware of potential risks: 

       **Don't Open Camera for Strangers!** 
      
      Opening your camera to unknown individuals poses security risks. Your privacy and safety are paramount. If something feels suspicious or uncomfortable, trust your instincts and refrain from sharing your camera feed.
      
       **This Smells Fishy!** 
      
      If anything seems off or raises doubts, be cautious. Verify the legitimacy of the lesson and the person on the other end before proceeding. Your safety is our top priority.
      
      Stay vigilant, and prioritize your security at all times during remote interactions."
    />

    <Modal style={VisaModal}
      isOpen={popUpIsOpen}
      onRequestClose={() => setPopUpIsOpen(false)}
      contentLabel="Visa Info"
    >

      <form onSubmit={handleSubmit}>
        <p>Hello!
          Please enter Your credit card info:
        </p>
        <input
          type="text"
          value={inputValue}
          placeholder="Credit Card"
          onChange={handleInputChange}
        />
      </form>


      <button onClick={() => setPopUpIsOpen(false)}>Close</button>
      <button onClick={openNextPopUp}>Submit</button>

      {/* This is the group lesson option  */}
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
  );
}

function Divider({ title }) {
  return (
    <div className={styles.DividerStyle}>
      <h2 className={styles.DividerTitleStyle}>{title}</h2>
    </div>
  );
}

// function PrizeSection() {
//   const containerStyle = {
//     display: 'flex', // This enables flex layout
//     width: '100%', // Full width of the container
//   };

//   const rightImageStyle = {
//     width: '30%', // Take up half of the container's width
//     // marginRight: 'auto', // Ensures it stays on the left
//   };

//   const leftSideStyle = {
//     width: '50%', // Take up the other half of the container's width
//     position: 'relative', // Allows for absolute positioning inside
//   };

//   const paragraphStyle = {
//     position: 'absolute', // Position over the image
//     top: 0, // At the top of the container
//     left: 0, // Aligned to the left
//     right: 0, // Aligned to the right
//     margin: '10px', // Add some margin
//     backgroundColor: 'rgba(255,255,255,0.5)', // Semi-transparent background
//     padding: '10px', // Padding inside the paragraph
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={leftSideStyle}>
//         <p style={paragraphStyle}>This is a paragraph on top of the right image.</p>
//         <img src="sideBar.png" alt="Right" style={{ width: '100%', height: 'auto' }} />
//       </div>
//       <img src="ClickMe.png" alt="Left" style={rightImageStyle} />

//     </div>
//   );
// }
function PrizeSection() {
  const [prizePopUpIsOpen, setPrizePopUp] = useState(false);
  const [snextPopUp, setSnextPopUp] = useState(false);
  const openPrizePopUp = () => setPrizePopUp(true);
  const opensNextPopUp = () => setSnextPopUp(true);
  const closesNextPopUp = () => setSnextPopUp(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const containerStyle = {
    // display: 'flex', // Enables flex layout
    // width: '100%', // Full width of the container
    // flexDirection:'column',
    // gap: '10px',
  };

  const leftSideStyle = {
    width: '100%', // Adjusted for 70% of the container's width if you want the other image to be 30%
    // display: 'flex', // Use flex to align items inside vertically
    // flexDirection: 'column', // Stack items vertically
    // alignItems: 'center', // Center items horizontally
    position: 'relative', // For absolute positioning of the paragraph
  };

  const prizeModal = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 700,
    },
  };
  const paragraphStyle = {
    position: 'absolute', // Position over the container
    top: 10,
    margin: (50, 150, 200, 100),
    backgroundColor: 'transparent',
    padding: '10px',
    width: '44%',
    color: 'rgb(240,249,255)',
    wordSpacing: '7px', // Corrected property name
    lineHeight: '1.5',
    fontSize: '16px',
  };

  const leftImageStyle = {
    width: '60%', // Right image takes up 30% of the container's width
  };

  // const rightImageStyle = {
  //   width: '250px', // Width of 50 pixels
  //   height: '250px', // Height of 50 pixels
  //   align: 'center',
  // };
  const rightImageStyle = {
    width: '170px', // Specific width
    height: '170px', // Specific height
    // alignSelf: 'center', // Aligns this item (not align) in the center of the flex direction
    // marginLeft: 'auto', // This helps in pushing the image towards the center/right
    // marginRight: 'auto', // Use margin auto for centering in the available space
    margin: (250, 0, 0, 150),
  };

  return (
    <div style={containerStyle}>
      <div style={leftSideStyle}>
        <p style={paragraphStyle}>

          Discover the extraordinary with a single click!
          <br></br><br></br>
          Click now and embark on an adventure that promises
          to transform your day with hidden gems and insider knowledge.
          Your journey to excitement is just one click away!
          <br></br>
          Don't let curiosity fade;
        </p>
        <img src="sideBar.png" alt="Sidebar" style={leftImageStyle} />
        <img src="ClickMe.png" alt="Click Me" style={rightImageStyle} role="button" onClick={openPrizePopUp} />


      </div>
      <Modal style={prizeModal}
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

  );
}

const WebsiteSimulation = () => {
  return (
    <>
      <Head>
        <title>Website Simulation</title>
        <meta name="keywords" content="websiteSimulation" />
      </Head>
      {SimulationIntro()}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {<Divider title="Purchase Our Services Today!" />}
      {EducationalSection()}
      <br></br>
      <br></br>
      {PrizeSection()}

    </>
  );
}

export default WebsiteSimulation;