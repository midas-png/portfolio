import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const slidingBorderTop = keyframes`
  0% {
    margin-right: 80px;
  }
  50% {
    margin-right: 0px; 
    margin-left: 0px;
  }
  100% {
    margin-left: 80px;
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px;
`;

export const SliderWrapper = styled(Swiper)`
  width: 100%;
  height: 300px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Slide = styled(SwiperSlide)``;

export const NotificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const NotificationTopBorderWrapper = styled.div`
  height: 2px;
  width: 70px;
`;

export const NotificationTopBorder = styled.div`
  background: ${({ theme }) => theme.palette.common.tertiary};
  height: 100%;
  animation: ${slidingBorderTop} 1s infinite;
`;

export const NotificationSwiper = styled.span``;
