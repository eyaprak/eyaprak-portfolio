import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TextDiv = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    span {
      display: inline-block;
    }
    h1 {
      font-size: 30px;
      line-height: 42px;
    }
  }
`;

const h1Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    transition: { delay: 0.2, duration: 1.2 },
    opacity: 1,
  },
};

export const StyledH1 = styled(motion.h1).attrs(() => ({
  initial: 'hidden',
  variants: h1Variants,
}))`
  font-size: 45px;
  font-family: Raleway, sans-serif;
  color: ${({ theme }) => theme.colors.textColor};
  line-height: 58px;
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 42px;
  }
`;

const h4Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    transition: { type: 'spring', stiffness: 100, delay: 0.4 },
    //delay: 0.4, duration: 1.2
    opacity: 1,
  },
};
export const StyledH4 = styled(motion.h4).attrs(() => ({
  initial: 'hidden',
  variants: h4Variants,
}))`
  margin-top: 0px;
  position: relative;
  z-index: 100;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Raleway', sans-serif;
  color: #5f6a8f;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    padding: 0px 10px;
    line-height: 21px;
  }
`;

export const SliderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SliderImage = styled.div`
  max-width: 380px;
  position: relative;
  img {
    vertical-align: center;
  }
  .profile {
    width: 100%;
    z-index: 999;
  }
  .dot-2 {
    position: absolute;
    left: auto;
    top: 35%;
    right: -4%;
    bottom: auto;
    z-index: -1;
  }
  .dot-1 {
    position: absolute;
    left: -6%;
    top: auto;
    right: auto;
    bottom: 0%;
    z-index: -1;
  }
  @media only screen and (max-width: 768px) {
    display: none;
    .dot-1 {
      display: none;
    }
  }
`;

const ProfileVariants = {
  showedProfile: {
    x: 0,
    transition: { delay: 1, duration: 0.6 },
    opacity: 1,
  },
  hiddenProfile: { x: 100, opacity: 0 },
};

export const ProfileImage = styled(motion.img).attrs(() => ({
  initial: 'hiddenProfile',
  variants: ProfileVariants,
}))`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const BubblesVariants = {
  visible: { opacity: 1, transition: { duration: 0.8 }, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export const SmallBubble = styled(motion.img).attrs(() => ({
  initial: 'hidden',
  variants: BubblesVariants,
}))`
  position: absolute;
  left: auto;
  top: -19%;
  right: 25%;
  bottom: auto;
  z-index: 1;
  height: 48px;
`;

export const MiddleBubble = styled(motion.img).attrs(() => ({
  initial: 'hidden',
  variants: BubblesVariants,
}))`
  position: absolute;
  left: auto;
  top: auto;
  right: -6%;
  bottom: 0%;
  z-index: 1;
  height: 86px;
  @media only screen and (max-width: 768px) {
    right: 7%;
  }
`;

export const BigBubble = styled(motion.img).attrs(() => ({
  initial: 'hidden',
  variants: BubblesVariants,
}))`
  position: absolute;
  left: -12%;
  top: auto;
  right: auto;
  bottom: -35%;
  z-index: 1;
  height: 220px;
`;

const ButtonVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 }, scale: 1 },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: {
      yoyo: Infinity,
    },
  },
};

export const StyledButton = styled(motion.a).attrs(() => ({
  initial: 'hidden',
  variants: ButtonVariants,
  whileHover: 'hover',
}))`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: 14px 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  //transition: all 200ms;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-family: Oxygen, sans-serif;
  margin-top: ${({ margint }) => margint || '30px'};
  align-self: self-start;
  z-index: 999;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnHoverColor};
  }
  @media only screen and (max-width: 768px) {
    margin: 15px auto;
  }
`;
