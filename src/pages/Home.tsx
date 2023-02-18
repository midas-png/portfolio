import { FC } from 'react';
import { Hero, EmailForm, Slider } from 'components';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Slider />
      <EmailForm />
    </>
  );
};
