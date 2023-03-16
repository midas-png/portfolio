import { FC } from 'react';
import { FooterWrapper, IconsWrapper, FooterText } from './styles';
import { SOCIAL_MEDIA } from 'data';
import { LazyShow } from 'components';

export const Footer: FC = () => (
  <FooterWrapper>
    <LazyShow direction='left'>
      <IconsWrapper>
        {SOCIAL_MEDIA.map(({ link, Icon }) => (
          <Icon key={Math.random()} onClick={() => open(link)} />
        ))}
      </IconsWrapper>
    </LazyShow>
    <LazyShow direction='right'>
      <FooterText>Yan Levin &copy; {new Date().getFullYear()}</FooterText>
    </LazyShow>
  </FooterWrapper>
);
