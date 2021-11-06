import '../styles/globals.css';
import Layout from '../components/Layout';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  const theme = {
    colors: {
      primaryColor: '#714aff',
      textColor: '#252b3a',
      btnHoverColor: '#4f1fff',
    },
  };
  const GlobalStyle = createGlobalStyle`
  *{
    letter-spacing: 0.4px;
  }
  body{
    background-color:#f0f4fb;
    font-family: 'Raleway',sans-serif;
    display:flex; 
    flex-direction:column; 
  }
  .active{
    border-bottom: 1px solid ${theme.colors.primaryColor} ;
    color:${theme.colors.primaryColor};
  }
  .error-field{
    border-bottom:2px solid red;
  }
  .error-label{
    color:red;
  }
  .error-textarea{
    border: 2px solid red;
  }
  .disabled {
    pointer-events: none;
    opacity:0.5;
  }
  .Toastify__toast-container{
    width:350px;
  }
`;

  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 30,
        duration: 5,
        ease: 'easeInOut',
      },
    },
    exit: {
      y: 100,
      transition: {
        type: 'spring',
        stiffness: 300,
        duration: 5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Layout>
          <motion.div
            key={router.route}
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
