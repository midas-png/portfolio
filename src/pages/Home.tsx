import { FC } from 'react';
import { Hero, EmailForm, Slider, Stack } from 'components';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Slider />
      <EmailForm />
    </>
  );
};
