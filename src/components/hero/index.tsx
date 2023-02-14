import { FC } from 'react';
import { HeroWrapper, WriterWrapper, ImageWrapper } from './styles';
import { Typewriter } from 'ui';

const texts = [
  'Lorem ipsum text 1 lmao test sdereds',
  'Lorem ipsum text 2 lmao test sdereds',
  'Lorem ipsum text 3 lmao test',
];

export const Hero: FC = () => {
  return (
    <HeroWrapper name='hero'>
      <WriterWrapper>
        <Typewriter
          speed={50}
          eraseSpeed={30}
          typingDelay={2000}
          eraseDelay={3000}
          text={texts}
          fontSize={80}
        />
      </WriterWrapper>
      <ImageWrapper></ImageWrapper>
    </HeroWrapper>
  );
};
