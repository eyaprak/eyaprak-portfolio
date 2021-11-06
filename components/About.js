import { useEffect } from 'react';
import { AboutSection, Container } from './styles/Section.styled';
import {
  AboutFlex,
  LeftSide,
  RightSide,
  BarFlex,
  BarFill,
  LeftSideList,
  ListItem,
  StyledH2,
} from './styles/About.styled';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import { Skills } from '../data/skills';
function About({ mt, showTitle }) {
  const listAnimation = useAnimation();
  const textAnimation = useAnimation();
  const rightSideAnimation = useAnimation();
  const barAnimation = useAnimation();
  const { ref, inView } = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  useEffect(() => {
    if (inView) {
      listAnimation.start('visible');
    }
    if (!inView) {
      listAnimation.start('hidden');
    }
  }, [listAnimation, inView]);

  useEffect(() => {
    if (inView2) {
      textAnimation.start('visible');
    }
    if (!inView2) {
      textAnimation.start('hidden');
    }
  }, [textAnimation, inView2]);

  useEffect(() => {
    if (inView3) {
      rightSideAnimation.start('visible');
      barAnimation.start('visible');
    }
    if (!inView3) {
      rightSideAnimation.start('hidden');
      barAnimation.start('hidden');
    }
  }, [rightSideAnimation, inView3]);
  return (
    <AboutSection mt={mt}>
      <Container>
        {showTitle && <SectionTitle Showtitle='true' title='About Me' />}
        <AboutFlex>
          <LeftSide>
            <StyledH2 animate={textAnimation} ref={ref2}>
              ✨ My name is Emrullah Yaprak, I am 25 years old. I am currently
              living in Ireland. I have more than 5 years of Web Development
              experience. I am self-motivated,focused and programmer. I am fond
              of web development and software development in general.
            </StyledH2>
            <LeftSideList>
              <ListItem animate={listAnimation} ref={ref}>
                💻 I’m currently working on MERN Stack apps.
              </ListItem>
              <ListItem animate={listAnimation} ref={ref}>
                ⏫ I’m currently improving my MERN Stack skills.
              </ListItem>
              <ListItem animate={listAnimation} ref={ref}>
                💻 I’m also learning React Native.
              </ListItem>
              <ListItem animate={listAnimation} ref={ref}>
                👯 I’m looking to collaborate on React.js Projects
              </ListItem>
              <ListItem animate={listAnimation} ref={ref}>
                ⚡ Fun fact: I love coding.
              </ListItem>
            </LeftSideList>
          </LeftSide>
          <RightSide animate={rightSideAnimation} ref={ref3}>
            {Skills.map((skill) => (
              <BarFlex key={skill.id}>
                <div className='slug'>{skill.slug}</div>
                <BarFill
                  animate={barAnimation}
                  per={skill.per}
                  ref={ref3}
                ></BarFill>
                <span className='percentage'>%{skill.per}</span>
              </BarFlex>
            ))}
          </RightSide>
        </AboutFlex>
      </Container>
    </AboutSection>
  );
}

export default About;
