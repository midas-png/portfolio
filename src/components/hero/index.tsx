import { FC } from 'react';
import { HeroWrapper, WriterWrapper, ImageWrapper } from './styles';
import { TEXT } from 'data';
import { Typewriter } from 'ui';

export const Hero: FC = () => {
  return (
    <HeroWrapper name='hero'>
      <WriterWrapper>
        <Typewriter
          speed={45}
          eraseSpeed={15}
          typingDelay={1000}
          eraseDelay={2000}
          text={TEXT}
          fontSize={80}
        />
      </WriterWrapper>
      <ImageWrapper></ImageWrapper>
    </HeroWrapper>
  );
};
