import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const CardItem = styled.div`
  background: #fff;
  padding: 30px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 20px;
  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);
  text-align: center;
  h3 {
    margin-top: 20px;
    margin-bottom: 14px;
    font-size: 22px;
    line-height: 28px;
    font-family: Raleway, sans-serif;
    font-weight: 500;
  }
  p {
    color: #5f6a8f;
    position: relative;
    z-index: 100;
    line-height: 26px;
    font-family: Oxygen, sans-serif;
  }
`;

export const StyledIcon = styled.div`
  width: 64px;
  padding: 16px;
  border-radius: 500px;
  background-color: ${({ bg }) => bg || '#fff'};
  img {
    width: 100%;
    vertical-align: middle;
  }
`;
