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
import { LazyShow } from 'components';
import { PROJECTS } from 'data';
import { Title } from 'ui';
import { Project } from 'components';

export const Slider: FC = () => {
  return (
    <LazyShow direction='left'>
      <ComponentWrapper>
        <Title fontSize={60}>What I created</Title>
        <ComponentSliderWrapper>
          <SliderWrapper loop={true} spaceBetween={50}>
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
    </LazyShow>
  );
};
