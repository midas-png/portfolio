import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  z-index: 999;
  background: ${({ theme }) => theme.palette.common.white};

  a {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    padding: 20px 0;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;