import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ComponentWrapper,
  ComponentSliderWrapper,
  SliderWrapper,
  Slide,
  NotificationWrapper,
  NotificationSwiper,
  NotificationTopBorderWrapper,
  NotificationTopBorder,
} from './styles';
import { LazyShow } from 'components';
import { PROJECTS_EN, PROJECTS_RU } from 'data';
import { Title } from 'ui';
import { Project } from 'components';

export const Slider: FC = () => {
  const { t, i18n } = useTranslation();
  const PROJECTS = i18n.language === 'en' ? PROJECTS_EN : PROJECTS_RU;

  return (
    <LazyShow direction='left'>
      <ComponentWrapper>
        <Title fontSize={60}>{t('whatICreated')}</Title>
        <ComponentSliderWrapper>
          <SliderWrapper loop={true} spaceBetween={50}>
            {PROJECTS.map(({ name, company, description, image }, index) => (
              <Slide key={Math.random()}>
                <Project
                  name={name}
                  company={company}
                  description={description}
                  image={image}
                  reverse={index % 2 === 0}
                />
              </Slide>
            ))}
          </SliderWrapper>
          <NotificationWrapper>
            <NotificationTopBorderWrapper>
              <NotificationTopBorder />
            </NotificationTopBorderWrapper>
            <NotificationSwiper>{t('swipe')}</NotificationSwiper>
          </NotificationWrapper>
        </ComponentSliderWrapper>
      </ComponentWrapper>
    </LazyShow>
  );
};
