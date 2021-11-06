import styled from 'styled-components';
import { motion } from 'framer-motion';
export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const FormFiled = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};
  outline: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textColor};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  &:focus {
    ~ ${FormLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primaryColor},
      #4f2ad5
    );
    border-image-slice: 1;
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  grid-column-end: five;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    grid-template-columns: 1fr;
  }
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  transition: all 0.5s;
  background: transparent;
  padding: 10px;
  &:focus {
    outline: none;
    border-width: 2px;
    border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primaryColor},
      #4f2ad5
    );
    border-image-slice: 1;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  a:not(:first-child) {
    margin-left: 15px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoadingDivVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: [0.3, 1, 1, 0.3],
    scale: [1, 1.2, 1.2, 1],
    originZ: [0.5, 1, 1, 0.5],
    transition: {
      type: 'spring',
      stiffness: 120,
      duration: 1.5,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export const LoadingDiv = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: LoadingDivVariants,
}))`
  position: absolute;
  left: calc(50% - 30px);
  transform: translate(-50%, 0);
  width: 50px;
  top: calc(50% - 45px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90px;
    height: 90px;
  }
`;
