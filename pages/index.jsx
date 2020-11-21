import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';
const Home = () => (
  <>
    <main className={styles.container}>
      <header className={styles.header}>
        <Image
          className={`${styles.headerImage} ${styles.border}`}
          src='/profile.svg'
          width='50'
          height='50'
        />
        <h1 className={styles.heading}>Anand Mohanan</h1>
        <section className={styles.headingMd}>
          <p className={styles.headingMd}>
            Hello, I am Anand . I am currently pursuing bachelor of engineering
            in electronics and communication engineering . A self taught web
            developer with good experience in front end frameworks like React
            and I started to build my own projects
          </p>
        </section>
      </header>
      <a
        href='https://www.instagram.com/ananth_mohanan/'
        style={{ marginRight: '10px' }}>
        <Image height='50' width='50' src='/instagram.svg' />
      </a>
      <a
        href='https://www.linkedin.com/in/anand-mohanan-7120061bb/'
        style={{ marginRight: '10px' }}>
        <Image height='50' width='50' src='/linkedin.svg' />
      </a>
      <a
        href='https://github.com/ananth7112001'
        style={{ marginRight: '10px' }}>
        <Image height='50' width='50' src='/github.svg' />
      </a>
      <a
        href='https://discordapp.com/users/376632059923267584/'
        style={{ marginRight: '10px' }}>
        <Image height='50' width='50' src='/discord.svg' />
      </a>
      <a
        href='mailto:ananthkvmohanan@gmail.com'
        style={{ marginRight: '10px' }}>
        <Image height='50' width='50' src='/email.svg' />
      </a>
      <div className={styles.link} style={{ marginTop: '20px' }}>
        <Link href='/projects'>My Projects &#8594;</Link>
      </div>
    </main>
  </>
);

export default Home;
