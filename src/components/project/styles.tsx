import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div<{ reverse?: boolean }>`
  background: ${({ theme }) => theme.palette.common.tertiary};
  justify-self: center;
  width: 300px;
  height: 300px;
  ${({ reverse }) => reverse && 'order: 2;'}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${({ reverse }) => !reverse && 'justify-self: center;'}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.palette.common.black};
  opacity: 0.5;
  text-transform: uppercase;
`;

export const ProjectDescription = styled.span`
  width: 600px;
  line-height: 24px;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;