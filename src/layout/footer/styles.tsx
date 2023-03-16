import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palette.common.black};
  padding: 15px 50px;

  @media screen and (max-width: 1024px) {
    align-items: space-between;
    flex-direction: column;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;

  svg {
    height: 50px;
    width: 50px;
    fill: ${({ theme }) => theme.palette.common.white};
    cursor: pointer;
  }
`;

export const FooterText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.common.white};
`;
