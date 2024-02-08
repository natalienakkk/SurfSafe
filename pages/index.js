import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';
import Footer from '../comps/Footer';



function FixedImage({ isFixed }) {
  console.log(`this is is Fixed ${isFixed}`);
  console.log('******************************************** ');
  return (
    <div>
      <img
        src="/firstPage.jpg"
        alt="Fixed Content"
        className={isFixed ? styles.FixedImage : styles.ScrollImage}
      />
    </div>
  );
}


export default function Home() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const limit = window.innerHeight * 1.5; // Three full viewport heights
      if (window.scrollY >= limit) {
        console.log(`heeeeeeeeeeeeeey momo`);
        setIsFixed(false); // Image becomes part of the regular document flow
      } else {
        console.log(`heeeeeeeeeeeeeey mimiii`);
        setIsFixed(true); // Image remains fixed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.MainIntroContent}>
      <FixedImage isFixed={isFixed} />

      {/* <IntroParas /> */}

      <div className={styles.ScrollContent}>
        <div className={styles.SinglePara}>
          <h1>"Welcome, Safe Surfers"</h1>
          <p>
            Dive into a sea of knowledge and fun as we embark
            on an exciting journey to master the art of safe internet use together!
          </p>
        </div>
        <br></br>

        <div className={styles.SinglePara}>
          <h1>"World of Adventure"</h1>
          <p>
            Step into a world of adventure with our vivid simulations and captivating
            chat scenarios, crafted to make you an internet safety hero! Here,
            you'll master the skills to dodge online threats and become a wise explorer
            of the digital universe, all while having the time of your life!
          </p>

        </div>
        <br></br>

        <div className={styles.SinglePara}>
          <h1>"Let's Get Started!"</h1>
          <img src="/child.png" width={274} height={174}></img>
        </div>
                       
      </div>
      
    <br></br>

    </div>
        
  );
}





