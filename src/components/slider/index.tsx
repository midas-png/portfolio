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
import { Assets } from 'assets';
import { Title } from 'ui';
import { Project } from 'components';

const PROJECTS = [
  {
    name: 'uCode',
    company: 'IThub Group',
    description: `Exchange service of ready-made solutions as design, website, assets etc.
    from IThub College students. I've done almost the entire client
    side using React and JavaScript. Also I was refactoring,
    doing hotfixes, suggesting technical solutions and reviewing designer's work.
    Also I have been communitacing a lot with design team, backend team and the managers.
`,
    link: 'https://disk.yandex.ru/d/_40OHIKCqS8cxA',
    image: Assets.Ucode,
  },
  {
    name: 'Pollhub',
    company: 'IThub Group',
    description: `A service for creating and passing
    tests and exams for IThub College. I used to be a stand-in who can
    make bug fixes and developing new features ASAP. Successfuly fixed a lot of
    critical bugs, reviewed and refactored a huge part of the code. Resolved technical issues
    with the technologies stack.`,
    link: 'https://pollhub.ru/',
    image: Assets.Pollhub,
  },
  {
    name: 'badTenant',
    company: 'Self-made project',
    description: `My graduate work. Passport-rating of tenants and owners,
    own project made from scratch with start-up potential. While making this project 
    I got a lot of hard skills that allowed me to get my first job as a frontend developer.
    I usually doing some refactoring and improvments. Also it's my first big project 
    made by me alone.`,
    link: 'http://217.151.229.239/',
    image: Assets.Badtenant,
  },
];

export const Slider: FC = () => {
  return (
    <ComponentWrapper>
      <Title fontSize={60}>What I created</Title>
      <ComponentSliderWrapper>
        <SliderWrapper loop={true}>
          {PROJECTS.map(
            ({ name, company, description, link, image }, index) => (
              <Slide key={Math.random()}>
                <Project
                  name={name}
                  company={company}
                  description={description}
                  link={link}
                  image={image}
                  reverse={index % 2 === 0}
                />
              </Slide>
            )
          )}
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
