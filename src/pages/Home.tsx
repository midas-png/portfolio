import { FC } from 'react';
import { Hero, EmailForm, Slider, Stack, About } from 'components';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Slider />
      <About />
      <EmailForm />
    </>
  );
};
