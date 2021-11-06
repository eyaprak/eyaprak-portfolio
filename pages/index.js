import Slider from '../components/Slider';
import Works from '../components/Works';
import About from '../components/About';
import Contact from '../components/Contact';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Emrullah Yaprak | Full Stack Developer | Freelancer</title>
        <meta
          name='description'
          content='Emrullah Yaprak, Full Stack Web Developer Contact, Hire Web Developer, Ireland Web Developer Hire Now!'
        />
        <meta
          name='keywords'
          content='Emrullah Yaprak, Full Stack Developer, Full Stack Web Developer, Ireland Web Developer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      <About mt='100px' showTitle='true' />
      <Works />
      <Contact showTitle='true' />
    </>
  );
}
