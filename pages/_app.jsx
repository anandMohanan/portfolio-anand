import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        + <meta name='description' content='Portfolio of Anand Mohanan' />
        <link rel='icon' href='/profile.svg' />
        <title>Anand Mohanan</title>
        <meta property='og:title' content='Anand mohanan' key='ogtitle' />+{' '}
        <meta
          property='og:description'
          content='Portfolio of Anand Mohanan'
          key='ogdesc'
        />
        <meta
          name='google-site-verification'
          content='Kz4X8YFeEdRYjtTEh42enOqBMhgp54UK8Hcr9o04xJ8'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
