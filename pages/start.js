import Head from 'next/head'
import styles from '../styles/Start.module.css'


const Start = () => {
  return (
<div className={styles.CardsContainer}>
      <div className={styles.SingleCard}>
        <img src="/websiteSimulation.png" alt="First Game" />
        <button className={styles.PlayButton}>Play Now</button>
      </div>
      <div className={styles.SingleCard}>
        <img src="/chat.png" alt="Second Game" />
        <button className={styles.PlayButton}>Play Now</button>
      </div>
    </div>
  );
}
 
export default Start;