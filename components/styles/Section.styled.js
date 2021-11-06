import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SliderSection = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const ServicesSection = styled.section`
  padding: 20px 0px;
`;

export const WorksSection = styled.section`
  margin-top: 50px;
  padding: 20px 0px;
`;
export const TimelineSection = styled.section`
  padding: 20px 0px;
`;

export const AboutSection = styled.section`
  margin-top: ${({ mt }) => mt};
  padding: 20px 0px;
`;

export const ContactSection = styled.section`
  margin-top: 50px;
  padding: 20px 0px;
`;
export const SocialSection = styled.section`
  padding: 20px 0px;
`;

export const FooterSection = styled.footer`
  height: 50px;
  background: ${({ theme }) => theme.colors.textColor};
  color: #fff;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    transition: { type: 'spring', stiffness: 90 },
    //delay: 0.2, duration: 1.2
    opacity: 1,
  },
};

export const SectionTitleStyled = styled(motion.h3).attrs(() => ({
  initial: 'hidden',
  variants: TitleVariants,
}))`
  font-family: Raleway, sans-serif;
  color: ${({ color, theme }) => theme.colors.textColor};
  font-size: 36px;
  line-height: 46px;
  font-weight: 700;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const BreadcrumbSection = styled.div`
  background-color: #252b3a;
  padding: 20px 0px;
  @media only screen and (max-width: 768px) {
    padding: 5px 0px;
  }
`;
