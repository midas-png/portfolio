import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 100px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  gap: 15px 25px;
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
`;

export const StackTechnology = styled.span`
  border: ${({ theme }) => `2px solid ${theme.palette.common.tertiary}`};
  border-radius: 30px;
  padding: 10px 15px;
`;
