import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  z-index: 999;

  a {
    cursor: pointer;
  }
`;
