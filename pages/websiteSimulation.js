import Head from 'next/head'
import styles from '../styles/WebsiteSimulation.module.css'

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

function PurchaseButtonPopUp(){
  // TODO Shaden - Pop Up 
  // When the User tries to purchase the group lesson, 
  // this button open a pop up that asks for the user visa card with a sumbit button, 
  // if the user types a use card and sumbits, it displays a warning explaining the risk
}

function JoinForFreeButton(){
  //TODO Shaden - Pop up
  // explain the risk - this is a free lesson one on one, with camera remotly!!
  // Dont open camera for strangers! this smells fishy!!!
}

function EducationalSection() {
  return (
    <div className={styles.ServicesContainer}>

      <div className={styles.SingleService}>
        <img src="/groupLesson.webp" alt="Group Lesson" role="button" onClick={()=>PurchaseButtonPopUp()}/>
        <p className={styles.SingleServiceDetails}>
          Boost your skills in a fun group setting!
          Buy a Group Lesson now—learn together, save money, and make new friends.
        </p>
        <br></br>
        <br></br>
      <button className={styles.PurchaseButton} onClick={() => PurchaseButtonPopUp()}>Join the fun!</button>
    </div>

      <div className={styles.SingleService}>
        <img src="/privateLesson.webp" alt="One on One Lesson"  role="button" onClick={()=>JoinForFreeButton()}/>
        <p className={styles.SingleServiceDetails}>
          Boost your skills in a fun group setting!
          Buy a Group Lesson now—learn together, save money, and make new friends.
        </p>
        <br></br>
        <br></br> 
      <button  className={styles.PurchaseButton} onClick={() => JoinForFreeButton()}>Join Now Free!</button>
      </div>
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
    </>
  );
}

export default WebsiteSimulation;