import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';



function FixedImage({ isFixed }) {
  console.log(`this is is Fixed ${isFixed}`);
  console.log('heey');
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

function IntroParas() {
  const comps = [
    // The first paragraph
    <div className={styles.ScrollContent}>
      <h1>"Welcome, Safe Surfers"</h1> 
      <p>
        "Dive into a sea of knowledge and fun as we embark \
        on an exciting journey to master the art of safe internet use together!",
      </p>
    </div>,

    // The secondn Paragraph 
    <div className={styles.ScrollContent}>
      <h1>"World of Adventure"</h1> 
      <p>
        "Step into a world of adventure with our vivid simulations and captivating \
        chat scenarios, crafted to make you an internet safety hero! Here, \
        you'll master the skills to dodge online threats and become a wise explorer\
        of the digital universe, all while having the time of your life!\"",
      </p>
    </div>,

    // The third paragraph (image)
    <div className={styles.ScrollContent}>
      <h1>"Let's Get Started!"</h1> 
      <img src="/child.png" width={274} height={164}></img>
    </div>,

  ];
  const [currentComp, setCurrentComp] = useState(comps[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      const compIndex = Math.min(Math.floor(window.scrollY / scrollThreshold), comps.length - 1);
      setCurrentComp(comps[compIndex]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [comps]); 

  return (currentComp);
}



export default function Home() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const limit = window.innerHeight * 3; // Three full viewport heights
      if (window.scrollY >= limit) {
        setIsFixed(false); // Image becomes part of the regular document flow
      } else {
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
      <h1>"Welcome, Safe Surfers"</h1> 
      <p>
        "Dive into a sea of knowledge and fun as we embark \
        on an exciting journey to master the art of safe internet use together!",
      </p>
    
    <br></br>
  
    
      <h1>"World of Adventure"</h1> 
      <p>
        "Step into a world of adventure with our vivid simulations and captivating \
        chat scenarios, crafted to make you an internet safety hero! Here, \
        you'll master the skills to dodge online threats and become a wise explorer\
        of the digital universe, all while having the time of your life!\"",
      </p>
    
<br></br>
    
    
      <h1>"Let's Get Started!"</h1> 
      <img src="/child.png" width={274} height={164}></img>
      </div>
    </div>
  );
}





