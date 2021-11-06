import { useEffect } from 'react';
import { WorksSection, Container } from './styles/Section.styled';
import {
  List,
  ListItem,
  Overlay,
  OverlayText,
  CenteredDiv,
  ImageDiv,
} from './styles/Works.styled';
import { StyledButton } from './styles/Slider.styled';

import Image from 'next/image';
import Link from 'next/link';
import { Projects } from '../data/projects';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';

function Works() {
  const controls = useAnimation();
  const overlayAnimation = useAnimation();
  const { ref, inView } = useInView();
  const [ref2, inView2] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const onTap = () => {
    overlayAnimation.start('hover');
  };

  return (
    <WorksSection>
      <Container ref={ref}>
        <SectionTitle Showtitle='true' title='Recent Works' />
        <List>
          {Projects.slice(0, 6).map((project, i) => (
            <ListItem
              key={project.id}
              animate={controls}
              custom={i}
              onTap={onTap}
            >
              <Overlay>
                <OverlayText ref={ref2} animate={overlayAnimation}>
                  <h2>{project.title}</h2>
                  <p>{project.shortdescription}</p>
                  {project.buttons.map((btn) => btn)}
                </OverlayText>
              </Overlay>
              <Image layout='fill' src={project.image} alt='' />
            </ListItem>
          ))}
        </List>
        <CenteredDiv>
          <Link href='/works' passHref>
            <StyledButton animate='visible'>See All Projects</StyledButton>
          </Link>
        </CenteredDiv>
      </Container>
    </WorksSection>
  );
}

export default Works;
