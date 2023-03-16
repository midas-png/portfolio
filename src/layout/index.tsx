import { FC } from 'react';
import { LayoutWrapper } from './styles';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { AppRouter } from 'pages';

export const Layout: FC = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <AppRouter />
      <Footer />
    </LayoutWrapper>
  );
};
