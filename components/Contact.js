import { useEffect, useState } from 'react';
import { ContactSection, Container } from './styles/Section.styled';
import {
  FormGroup,
  FormFiled,
  FormLabel,
  FormWrapper,
  TextAreaField,
  StyledDiv,
  LoadingDiv,
} from './styles/Contact.styled';
import { StyledButton } from './styles/Slider.styled';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ showTitle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false);
  const [mailError, setMailError] = useState(false);

  const [loading, setLoading] = useState(false);

  const emailValidation = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      setMailError(true);
      return false;
    }
    setMailError(false);
    return true;
  };

  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (name !== '' && email !== '' && message !== '') {
      if (!emailValidation(email)) {
        toast.error('Email is not valid.');
        setLoading(false);
      } else {
        const { data } = await axios.post('/api/contact', {
          name,
          email,
          message,
        });
        if (data.success) {
          setName('');
          setMessage('');
          setEmail('');
          toast.success('Email has been sent succesfully.');
          setError(false);
          setLoading(false);
        } else {
          toast.error('Mail could not send. Please, try again later.');
          setError(true);
          setLoading(false);
        }
      }
    } else {
      toast.error('All fields need to be filled.');
      setError(true);
      setLoading(false);
    }
  };

  const closeButton = ({ closeToast }) => {
    return (
      <a onClick={closeToast}>
        <img
          src='/icons/close-icon.svg'
          style={{ width: '25px', height: '25px' }}
        />
      </a>
    );
  };

  return (
    <ContactSection>
      <Container style={{ position: 'relative' }}>
        {showTitle && <SectionTitle title='Get In Touch' />}
        {loading && (
          <LoadingDiv animate='visible'>
            <img src='/icons/loader.svg' />
          </LoadingDiv>
        )}
        <form className={loading === true ? 'disabled' : ''}>
          <FormWrapper>
            <FormGroup>
              <FormFiled
                type='input'
                placeholder='Name'
                name='name'
                id='name'
                required
                autoComplete='off'
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={error && 'error-field'}
                disabled={loading}
              />
              <FormLabel htmlFor='name' className={error && 'error-label'}>
                Name
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormFiled
                type='input'
                placeholder='Email'
                name='email'
                id='email'
                required
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={(error || mailError) && 'error-field'}
                disabled={loading}
              />
              <FormLabel
                htmlFor='email'
                className={(error || mailError) && 'error-label'}
              >
                Email
              </FormLabel>
            </FormGroup>
          </FormWrapper>
          <FormGroup>
            <TextAreaField
              id='message'
              name='message'
              rows='10'
              cols='50'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className={error && 'error-textarea'}
              disabled={loading}
            />
          </FormGroup>
          <StyledDiv>
            <div>
              <StyledButton
                margint='0px'
                animate='visible'
                onClick={(e) => sendEmail(e)}
                className={loading && 'disabled'}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </StyledButton>
            </div>
            <div>
              <a
                href='https://www.linkedin.com/in/emrullah-yaprak/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/icons/linkedin.png'
                  width='64px'
                  height='64px'
                  alt=''
                />
              </a>
              <a href='https://www.instagram.com/yprkemrullah/'>
                <Image
                  src='/icons/instagram.png'
                  width='64px'
                  height='64px'
                  alt=''
                />
              </a>
              <a href='https://github.com/eyaprak'>
                <Image
                  src='/icons/github.png'
                  width='64px'
                  height='64px'
                  alt=''
                />
              </a>
              <a href='https://gitlab.com/eyaprak'>
                <Image
                  src='/icons/gitlab.png'
                  width='64px'
                  height='64px'
                  alt=''
                />
              </a>
            </div>
          </StyledDiv>
        </form>
      </Container>
      <ToastContainer limit={5} closeButton={closeButton} />
    </ContactSection>
  );
}

export default Contact;
