import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/Start.module.css'


const Start = () => {
  const router = useRouter();

  const navigateToPage = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.CardsContainer}>
      <div className={styles.SingleCard}>
        <img src="/websiteSimulation.png" alt="First Game" />
        <button className={styles.PlayButton} onClick={() => navigateToPage('/websiteSimulation')}>Play Now</button>
      </div>
      <div className={styles.SingleCard}>
        <img src="/chat.png" alt="Second Game" />
        <button className={styles.PlayButton} onClick={() => navigateToPage('/chat')}>Play Now</button>
      </div>
    </div>
  );
}

export default Start;