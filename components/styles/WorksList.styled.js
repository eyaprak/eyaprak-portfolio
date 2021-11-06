import styled from 'styled-components';
import { motion } from 'framer-motion';
export const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const ListItemVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.8,
      duration: 2,
      type: 'tween',
      stiffness: 160,
    },
  }),
};

export const ListItem = styled(motion.li).attrs(() => ({
  initial: 'hidden',
  variants: ListItemVariants,
}))`
  display: grid;
  grid-template-columns: 1fr 4fr;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  background: white;
  border-radius: 15px;
  margin-top: 15px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  min-width: 280px;
  img {
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const RightSide = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  p {
    font-family: 'Raleway', sans-serif;
    color: #5f6a8f;
  }
  h2 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  svg {
    min-width: 64px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    h2 {
      display: inline-block;
      text-align: center;
      font-size: 16px;
      margin-top: 5px;
    }
    p {
      font-size: 13px;
    }
  }
`;

export const UsedLanguagesList = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    gap: 15px;
    padding-left: 0px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      /* box-shadow: 0px 0px 30px -10px #dedede; */
      border: dashed 1px #dedede;
      border-radius: 5px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    svg {
      width: 25px;
    }
    ul {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const Links = styled.div`
  margin-left: auto;
  display: flex;
  gap: 15px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 25px;
  }
`;
