import styled from 'styled-components';

export const NavbarWrapper = styled.header`
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
    justify-content: space-between;
    padding: 20px 50px;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const MenuLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Language = styled.option``;
