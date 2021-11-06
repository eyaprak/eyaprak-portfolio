import { useEffect } from 'react';
import { SectionTitleStyled } from './styles/Section.styled';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function SectionTitle({ Showtitle, title }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <SectionTitleStyled animate={controls} ref={ref}>
      {title}
    </SectionTitleStyled>
  );
}

export default SectionTitle;
