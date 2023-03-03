import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 100px;

  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
`;

export const ComponentStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  gap: 15px 25px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    text-transform: uppercase;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  gap: 15px 25px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StackTechnology = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border: ${({ theme }) => `2px solid ${theme.palette.common.tertiary}`};
  border-radius: 30px;
  padding: 10px 15px;

  svg {
    height: 22px;
    width: 22px;
  }
`;
