import styled from 'styled-components';
import { motion } from 'framer-motion';
export const List = styled.div`
  display: grid;
  grid-auto-rows: minmax(auto, 1fr);
  grid-auto-columns: 1fr;
  grid-column-gap: 14px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 14px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  width: 100%;
  height: 100%;
  display: none;
  transition: opacity 5s;
  top: 0;
  left: 0;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const OverlayTextVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 1,
  },
  hover: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
};

export const OverlayText = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: OverlayTextVariants,
  whileHover: 'hover',
  whileTap: 'hover',
  whileFocus: 'hover',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  color: #fff;
  h2 {
    line-height: 30px;
    font-weight: 400;
    font-size: 22px;
    font-family: Raleway, sans-serif;
    margin: 0px;
  }
  a {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
`;
export const OutlinedButton = styled.button`
  color: ${({ color }) => color || '#fff'};
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 500px;
  margin-top: 14px;
  font-size: 14px;
  transition: all 200ms ease;
  border: 1px solid #714aff;
  background: none;
  cursor: pointer;
  &:hover {
    background: #714aff;
    color: #fff;
  }
  border-radius: 15px;
  text-align: center;
`;

const ListItemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.4,
      duration: 2,
      type: 'spring',
      stiffness: 160,
    },
  }),
};

export const ListItem = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: ListItemVariants,
}))`
  cursor: pointer;
  border-radius: 20px;
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  &:hover,
  &:active,
  &:focus {
    ${Overlay} {
      position: absolute;
      opacity: 1;
      display: block;
      border-radius: 20px;
      z-index: 999;
    }
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDiv = styled.div`
  display: block;
`;
