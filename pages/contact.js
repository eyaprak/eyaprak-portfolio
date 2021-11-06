import Breadcrumb from '../components/Breadcrumb';
import ContactForm from '../components/Contact';
import Head from 'next/head';
function Contact() {
  return (
    <>
      <Head>
        <title>Get In Touch | Emrullah Yaprak | Full Stack Web Developer</title>
        <meta
          name='description'
          content='If you are looking for a good web developer in Ireland, you are definitely in the right place!, Hire Web Developer, Emrullah Yaprak Contact'
        />
        <meta
          name='keywords'
          content='Emrullah Yaprak Contact, Hire Web Developer, Web Developer Contact, Web Developer in Ireland'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Breadcrumb text='CONTACT ME' />
      <ContactForm />
    </>
  );
}

export default Contact;
