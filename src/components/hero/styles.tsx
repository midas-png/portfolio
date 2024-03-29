import styled from 'styled-components';

export const HeroWrapper = styled.div<{ name: string }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  justify-content: space-between;
  padding: 0 50px;
  padding-top: 100px;
  background: ${({ theme }) => theme.palette.common.white};

  @media screen and (max-width: 1024px) {
    min-height: 30vh;
    padding: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media screen and (max-width: 786px) {
    min-height: 50vh;
  }
`;

export const WriterWrapper = styled.div``;

export const ImageWrapper = styled.div`
  display: none;
`;
