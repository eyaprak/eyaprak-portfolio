import About from '../components/About';
import Breadcrumb from '../components/Breadcrumb';
import Timelines from '../components/Timelines';
import Head from 'next/head';
function about() {
  return (
    <>
      <Head>
        <title>About Me | Emrullah Yaprak | Full Stack Web Developer</title>
        <meta
          name='description'
          content='Emrullah Yaprak About Me, Full Stack Web Developer Contact, Hire Web Developer, Ireland Web Developer Hire Now!'
        />
        <meta
          name='keywords'
          content='Full Stack Developer, Full Stack Web Developer, Emrullah Yaprak About Me, Ireland Web Developer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Breadcrumb text='ABOUT ME' />
      <About mt='0px' />
      <Timelines />
    </>
  );
}

export default about;
