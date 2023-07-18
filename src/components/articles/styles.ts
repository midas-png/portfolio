import styled from 'styled-components';

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 50px 100px;
  background: ${({ theme }) => theme.palette.common.black};

  @media screen and (max-width: 1024px) {
    padding: 50px;
    padding-bottom: 50px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
