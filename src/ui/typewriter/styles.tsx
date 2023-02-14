import styled, { keyframes } from 'styled-components';

const blinking = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.1; }
  100% { opacity: 1 }
`;

export const TypewriterWrapper = styled.div`
  display: flex;
`;

export const TypewriterText = styled.span<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const TypewriterCursor = styled.span<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  animation: ${blinking} 1s infinite;
`;
