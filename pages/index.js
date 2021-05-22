import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';

const Home = () => {
  //use auth hook created
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={(e) => auth.signinWithGithub()}>Sing In</button>
      <main className={styles.main}>
        <h1 className={styles.title}>
          At<a href="https://nextjs.org">React!</a>
        </h1>

        <p className={styles.description}>
          A New Way to Send & Receive Feedback
        </p>
        {/* //this '?.' is kind of ternary opertor provided by NextJS */}
        <div>user: {auth?.user}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
