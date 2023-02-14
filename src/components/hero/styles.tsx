import styled from 'styled-components';

export const HeroWrapper = styled.div<{ name: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  padding-top: 100px;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div``;

export const ImageWrapper = styled.div``;
