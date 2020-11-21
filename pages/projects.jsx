import styles from '../styles/project.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.link} style={{ marginTop: '20px' }}>
        <Link href='/'> &#8592; Home</Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Clothing </h3>
          <p>A Clothing E-commerce web application</p>
          <p>Stack Used: React--Firebase--Styled Components</p>
          <a
            href='https://github.com/ananth7112001/clothing-react'
            style={{ marginRight: '10px' }}>
            <Image height='30' width='30' src='/file.svg' />
          </a>
          <a
            href='https://clothing-react-by-anand.herokuapp.com/'
            style={{ marginRight: '10px' }}>
            <Image height='30' width='30' src='/web.svg' />
          </a>
        </div>

        <div className={styles.card}>
          <h3>Post</h3>
          <p>
            A web application which allows users to post pictures anonymously
            and like and delte thier post
          </p>
          <p>Stack Used: React--Mongo Db--Mongoose--Express</p>
          <a
            href='https://github.com/ananth7112001/post-react-express-mongodb'
            style={{ marginRight: '10px' }}>
            <Image height='30' width='30' src='/file.svg' />
          </a>
          <a
            href='https://post-react-anandkv.netlify.app/'
            style={{ marginRight: '10px' }}>
            <Image height='30' width='30' src='/web.svg' />
          </a>
        </div>

        <div className={styles.card}>
          <h3>Music</h3>
          <p>
            A discord music bot which allows users to play music from youtube
            and soundcloud.It also has moderation commands
          </p>
          <p>Stack Used: Discord.js</p>
          <a
            href='https://github.com/ananth7112001/music-bot'
            style={{ marginRight: '10px' }}>
            <Image height='30' width='30' src='/file.svg' />
          </a>
        </div>

        <div className={styles.card}>
          <h3>Conference App</h3>
          <p>
            A conference app created using salesforce's Lightning web
            compponents.This was part of a course from TrailHead
          </p>
          <p>Stack Used: Lightning Web Components--Js--css</p>
          <a
            href='https://github.com/ananth7112001/lwc-conference-app'
            style={{ marginRight: '10px' }}>
            <Image height='30' width='30' src='/file.svg' />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;
