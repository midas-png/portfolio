import { FC } from 'react';
import { Link } from 'react-scroll';
import { NavbarWrapper, ButtonWrapper } from './styles';
import { Title, Button } from 'ui';

export const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <Link to='hero' spy={true} smooth={true} offset={-100} duration={1000}>
        <Title>Yan Levin</Title>
      </Link>
      <ButtonWrapper>
        <Link to='form' spy={true} smooth={true} offset={-100} duration={1000}>
          <Button>Mail me</Button>
        </Link>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};
