import { FC } from 'react';
import { NavbarWrapper } from './styles';
import { Title, Button } from 'ui';

export const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <Title>Yan Levin</Title>
      <Button>Mail me</Button>
    </NavbarWrapper>
  );
};
