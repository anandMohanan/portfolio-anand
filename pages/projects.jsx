import styles from "../styles/projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.link} style={{ marginTop: "20px" }}>
        <Link href="/"> &#8592; Home</Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Clothing </h3>
          <p>A Clothing E-commerce web application</p>
          <p>Stack Used: React--Firebase--Styled Components</p>
          <a
            href="https://github.com/anandMohanan/clothing-react"
            style={{ marginRight: "10px" }}
          >
            <Image height="30" width="30" src="/file.svg" alt="github" />
          </a>
          <a
            href="https://clothing-react-by-anand.herokuapp.com/"
            style={{ marginRight: "10px" }}
          >
            <Image height="30" width="30" src="/web.svg" alt="live" />
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
            href="https://github.com/anandMohanan/post-react-express-mongodb"
            style={{ marginRight: "10px" }}
          >
            <Image height="30" width="30" src="/file.svg" alt="github" />
          </a>
          <a
            href="https://post-react-anandkv.netlify.app/"
            style={{ marginRight: "10px" }}
          >
            <Image height="30" width="30" src="/web.svg" alt="live" />
          </a>
        </div>

        <div className={styles.card}>
          <h3>Chilli bot</h3>
          <p>
            Chilli is a multi functionality discord bot with features like
            music(with filters),moderation,economy,roleplay fun commands.
            Currently running in 10 servers with over 2000 users.
          </p>
          <p>Stack Used: Discord.js</p>
          <a
            href="https://github.com/anandMohanan/chilli-bot"
            style={{ marginRight: "10px" }}
          >
            <Image height="30" width="30" src="/file.svg" alt="github" />
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
            href="https://github.com/anandMohanan/lwc-conference-app"
            style={{ marginRight: "10px" }}
          >
            <Image height="30" width="30" src="/file.svg" alt="github" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;
