import styled, { keyframes } from 'styled-components';

const blinking = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.1; }
  100% { opacity: 1 }
`;

export const TypewriterWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const TypewriterText = styled.span<{ fontSize?: number }>`
  font-size: ${({ fontSize = 20 }) => `${fontSize}px`};
  color: ${({ theme }) => theme.palette.common.black};

  @media screen and (max-width: 1024px) {
    font-size: ${({ fontSize = 20 }) => `${fontSize / 2}px`};
  }
`;

export const TypewriterCursor = styled.span<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ theme }) => theme.palette.common.black};
  animation: ${blinking} 1s infinite;

  @media screen and (max-width: 1024px) {
    font-size: ${({ fontSize = 20 }) => `${fontSize / 2}px`};
  }
`;
