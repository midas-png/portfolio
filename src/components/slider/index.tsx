import { FC } from 'react';
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
import { Title } from 'ui';
import { Project } from 'components';

const PROJECTS = [
  {
    name: 'uCode',
    company: 'IThub Group',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
    link: 'http://188.225.83.40/',
  },
  {
    name: 'Pollhub',
    company: 'IThub Group',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
    link: 'https://pollhub.ru/',
  },
  {
    name: 'badTenant',
    company: 'Self-made project',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
    link: 'http://217.151.229.239/',
  },
];

export const Slider: FC = () => {
  return (
    <ComponentWrapper>
      <Title fontSize={60}>What I created</Title>
      <ComponentSliderWrapper>
        <SliderWrapper loop={true}>
          {PROJECTS.map(({ name, company, description, link }, index) => (
            <Slide key={Math.random()}>
              <Project
                name={name}
                company={company}
                description={description}
                link={link}
                reverse={index % 2 === 0}
              />
            </Slide>
          ))}
        </SliderWrapper>
        <NotificationWrapper>
          <NotificationTopBorderWrapper>
            <NotificationTopBorder />
          </NotificationTopBorderWrapper>
          <NotificationSwiper>SWIPE</NotificationSwiper>
        </NotificationWrapper>
      </ComponentSliderWrapper>
    </ComponentWrapper>
  );
};
