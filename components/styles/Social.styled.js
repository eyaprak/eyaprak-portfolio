import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  a:not(:first-child) {
    margin-left: 15px;
  }
`;
