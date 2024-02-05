import Head from 'next/head'
import styles from '../styles/WebsiteSimulation.module.css'

const WebsiteSimulation = () => {
  return (
    <>
      <Head>
        <title>Website Simulation</title>
        <meta name="keywords" content="websiteSimulation" />
      </Head>
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
    </>
  );
}

export default WebsiteSimulation;