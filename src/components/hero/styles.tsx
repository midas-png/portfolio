import styled from 'styled-components';

export const HeroWrapper = styled.div<{ name: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  justify-content: space-between;
  padding: 0 50px;
  padding-top: 100px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 100px;
    min-height: fit-content;
    height: fit-content;
  }
`;

export const WriterWrapper = styled.div``;

export const ImageWrapper = styled.div``;
