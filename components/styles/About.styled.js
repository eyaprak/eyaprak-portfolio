import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutFlex = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 25px;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 15px;
    }
    ul {
      font-size: 15px;
    }
  }
`;

const H2Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 1.5, stiffness: 500 },
};

export const StyledH2 = styled(motion.h2).attrs(() => ({
  initial: 'hidden',
  variants: H2Variants,
}))`
  font-size: 20px;
  font-weight: 500;
  font-family: Raleway, sans-serif;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 32px;

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 15px;
    }
  }
`;

export const LeftSideList = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  font-family: 'Raleway', sans-serif;
  color: #444444;
  font-size: 20px;
  line-height: 50px;
  font-weight: 400;
`;

const ListItemVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
  },
  transition: { duration: 1.2, stiffness: 300 },
};

export const ListItem = styled(motion.li).attrs(() => ({
  initial: 'hidden',
  variants: ListItemVariants,
  whileHover: { scale: 1.1, originX: 0 },
}))`
  cursor: pointer;
`;

const RightSideVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 1.5, stiffness: 500 },
};

export const RightSide = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: RightSideVariants,
}))`
  flex: 1;
  align-self: start;
  padding-left: 0px 50px;
  @media only screen and (max-width: 768px) {
    flex: auto;
    align-self: auto;
  }
`;

export const BarFlex = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
  background-color: #eee;
  color: #666;
  &:not(:first-child) {
    margin-top: 10px;
  }
  .slug {
    width: 120px;
    height: 28px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4f2ad5;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    z-index: 999;
  }
  .percentage {
    position: absolute;
    right: 5px;
    top: 4px;
  }
`;

export const BarFill = styled(motion.div).attrs((props) => ({
  initial: 'hidden',
  variants: {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: { width: props.per + '%', opacity: 1 },
  },
  transition: { duration: 2, delay: 0.5 },
}))`
  background-color: #714aff;
  max-width: ${({ per }) => per + '%' || '50%'};
  height: 28px;
`;
