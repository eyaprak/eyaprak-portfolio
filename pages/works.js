import Breadcrumb from '../components/Breadcrumb';
import WorksList from '../components/WorksList';
import Head from 'next/head';

function Works() {
  return (
    <>
      <Head>
        <title>
          Created Projects | Emrullah Yaprak | Full Stack Web Developer
        </title>
        <meta
          name='description'
          content='If you are looking for a good web developer in Ireland, you are definitely in the right place!,Hire Full Stack Developer, Here is my works!'
        />
        <meta
          name='keywords'
          content='Emrullah Yaprak works, Hire Full Stack Developer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Breadcrumb text='CREATED PROJECTS' />
      <WorksList />
    </>
  );
}

export default Works;
