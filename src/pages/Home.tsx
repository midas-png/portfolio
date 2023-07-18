import { FC } from 'react';
import { Hero, EmailForm, Slider, Stack, About, Articles } from 'components';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Slider />
      <Articles />
      <About />
      <EmailForm />
    </>
  );
};
