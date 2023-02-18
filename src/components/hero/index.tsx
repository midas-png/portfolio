import { FC } from 'react';
import { HeroWrapper, WriterWrapper, ImageWrapper } from './styles';
import { Typewriter } from 'ui';

const texts = [
  'Middle Frontend Developer who loves solving issues.',
  'Based in Moscow and making creative projects from the beginning.',
  'Waiting for your offer to bring excellent experience to your business!',
];

export const Hero: FC = () => {
  return (
    <HeroWrapper name='hero'>
      <WriterWrapper>
        <Typewriter
          speed={45}
          eraseSpeed={15}
          typingDelay={1000}
          eraseDelay={2000}
          text={texts}
          fontSize={80}
        />
      </WriterWrapper>
      <ImageWrapper></ImageWrapper>
    </HeroWrapper>
  );
};
