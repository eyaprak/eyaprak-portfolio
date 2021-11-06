import styled from 'styled-components';

export const CustomStyledButton = styled.a`
  background: transparent;
  padding: 10px 24px;
  border-radius: 15px;
  border: 1px solid #714aff;
  transition: all 300ms;
  &:hover {
    background: #714aff;
    border: 1px solid #714aff;
    color: white;
  }
`;
