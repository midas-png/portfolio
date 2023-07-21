import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroWrapper, WriterWrapper, ImageWrapper } from './styles';
import { TEXT_EN, TEXT_RU } from 'data';
import { Typewriter } from 'ui';

export const Hero: FC = () => {
  const { i18n } = useTranslation();

  return (
    <HeroWrapper name='hero'>
      <WriterWrapper>
        <Typewriter
          speed={45}
          eraseSpeed={15}
          typingDelay={1000}
          eraseDelay={2000}
          text={i18n.language === 'en' ? TEXT_EN : TEXT_RU}
          fontSize={80}
        />
      </WriterWrapper>
      <ImageWrapper></ImageWrapper>
    </HeroWrapper>
  );
};
