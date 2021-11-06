import { useEffect } from 'react';
import { Container } from './styles/Section.styled';
import {
  List,
  LeftSide,
  RightSide,
  UsedLanguagesList,
  ListItem,
  Links,
} from './styles/WorksList.styled';

import Image from 'next/image';

import { Projects } from '../data/projects';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WorksList() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <Container>
      <List ref={ref}>
        {Projects.map((project, i) => (
          <ListItem key={project.id} animate={controls} custom={i}>
            <LeftSide>
              <Image src={project.image} alt='' width={280} height={232} />
            </LeftSide>
            <RightSide>
              <h2>{project.title} </h2>
              <p>{project.description}</p>
              <UsedLanguagesList>
                <ul>
                  {project.icons.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
                <Links>
                  {project.buttons.map((b, index) => (
                    <div key={index}>{b}</div>
                  ))}
                </Links>
              </UsedLanguagesList>
            </RightSide>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default WorksList;
