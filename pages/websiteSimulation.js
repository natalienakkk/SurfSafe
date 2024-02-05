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

function EducationalSection() { 
  return (
    <div className={styles.ServicesContainer}>
      <div className={styles.SingleService}>
        <img src="/groupLesson.webp" alt="Group Lesson" />
        <p className={styles.SingleServiceDetails}>
          Boost your skills in a fun group setting!
          Buy a Group Lesson now—learn together, save money, and make new friends. 
          <br></br>
          Join the fun!
          </p>
        {/* <button className={styles.PlayButton} onClick={() => navigateToPage('/websiteSimulation')}>Play Now</button> */}
      </div>

      <div className={styles.SingleService}>
          <img src="/privateLesson.webp" alt="One on One Lesson" />
          <p className={styles.SingleServiceDetails}>
          Boost your skills in a fun group setting!
          Buy a Group Lesson now—learn together, save money, and make new friends.
          <br></br>
          Join Now Free! 
          </p>
          {/* <button className={styles.PlayButton} onClick={() => navigateToPage('/chat')}>Play Now</button> */}
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