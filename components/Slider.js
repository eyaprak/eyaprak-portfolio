import {
  TextDiv,
  SliderInner,
  SliderImage,
  ProfileImage,
  SmallBubble,
  StyledButton,
  MiddleBubble,
  BigBubble,
  TextTop,
  StyledH1,
  StyledH4,
} from './styles/Slider.styled';
import { SliderSection, Container } from './styles/Section.styled';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';

function Slider() {
  return (
    <SliderSection>
      <Container>
        <SliderInner>
          <TextDiv>
            <div>
              <StyledH1 animate='visible'>
                I’m Emrullah Yaprak, <br />a{' '}
                <Typewriter
                  words={['Full Stack', 'Node Js', 'React Js', 'Next Js']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />{' '}
                Developer
              </StyledH1>

              <StyledH4 animate='visible'>
                My mission is to help your business grow through my expretise in
                React.js, Node.js, Express.js, Next.js, MongoDB and more.
              </StyledH4>
            </div>
            <SmallBubble
              src='/images/small-bubble.webp'
              alt=''
              animate='visible'
            />
            <MiddleBubble
              src='/images/middle-bubble.webp'
              alt=''
              animate='visible'
            />
            <BigBubble src='/images/big-bubble.webp' alt='' animate='visible' />
            <Link href='/contact' passHref>
              <StyledButton animate='visible'>Hire Me</StyledButton>
            </Link>
          </TextDiv>
          <SliderImage>
            <ProfileImage
              animate='showedProfile'
              src='/images/profile.webp'
              alt=''
              className='profile'
              width={380}
              height={560}
            />
            <img src='/images/sag-ust-nokta.png' alt='' className='dot-2' />
            <img src='/images/sol-alt-nokta.png' alt='' className='dot-1' />
          </SliderImage>
        </SliderInner>
      </Container>
    </SliderSection>
  );
}

export default Slider;
