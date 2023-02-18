import { FC } from 'react';
import {
  ComponentWrapper,
  SliderWrapper,
  Slide,
  NotificationWrapper,
  NotificationSwiper,
  NotificationTopBorderWrapper,
  NotificationTopBorder,
} from './styles';

export const Slider: FC = () => {
  return (
    <ComponentWrapper>
      <SliderWrapper>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
        <Slide>Slide 3</Slide>
        <Slide>Slide 4</Slide>
        <Slide>Slide 5</Slide>
        <Slide>Slide 6</Slide>
        <Slide>Slide 7</Slide>
        <Slide>Slide 8</Slide>
        <Slide>Slide 9</Slide>
      </SliderWrapper>
      <NotificationWrapper>
        <NotificationTopBorderWrapper>
          <NotificationTopBorder />
        </NotificationTopBorderWrapper>
        <NotificationSwiper>Swipe</NotificationSwiper>
      </NotificationWrapper>
    </ComponentWrapper>
  );
};
