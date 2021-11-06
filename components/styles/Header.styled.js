import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrapper = styled.div`
  background: transparent;
  transition: 500ms all;
  &.scrolled {
    background: white;
    position: sticky;
    top: 0;
    z-index: 1002;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

    border-bottom: 2px solid transparent;
    border-image: linear-gradient(to right, #ad60ff, #7856ff, #5263ff);
    border-image-slice: 1;
  }
  @media only screen and (max-width: 768px) {
    &.scrolled {
      position: relative;
      background: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      border-bottom: none;
    }
  }
`;

export const StyledHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: transparent;
  z-index: 999;
  &.scrolled {
    background: red;
  }
  span {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    color: #252b3a;
    font-family: 'Montserrat', sans-serif;
  }
  img {
    width: 28px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Flex = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  img {
    min-width: 262px;
    min-height: 60px;
  }
`;

const ListVariants = {
  hidden: {
    scale: 0,
    y: -50,
  },
  visible: {
    scale: 1,
    y: 0,
    transition: { delay: 1, duration: 0.3 },
  },
};

export const List = styled(motion.ul).attrs(() => ({
  initial: 'hidden',
  variants: ListVariants,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 60px;
  li {
    transition: all 300ms;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  @media only screen and (max-width: 768px) {
    gap: 20px;
    padding-left: 0px;
  }
`;

export const StyledButton = styled.a`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  transition: all 200ms;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-family: Oxygen, sans-serif;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnHoverColor};
  }
`;
