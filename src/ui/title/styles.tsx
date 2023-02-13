import styled, { css } from 'styled-components';
import { IProps } from './props';

const headingStyles = {
  h1: css`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 36px;
    font-style: normal;
    line-height: 48px;
  `,
  h2: css`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 28px;
    font-style: normal;
    line-height: 36px;
  `,
  h3: css`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 24px;
    font-style: normal;
    line-height: 32px;
  `,
  h4: css`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 20px;
    font-style: normal;
    line-height: 28px;
    letter-spacing: 0.05em;
  `,
};

const weightStyles = {
  bold: css`
    font-weight: 700;
  `,
  semibold: css`
    font-weight: 600;
  `,
  medium: css`
    font-weight: 500;
  `,
};

export const StyledTitleRoot = styled.span<IProps>`
  margin: 0;
  user-select: none;
  ${({ variant = 'h1' }) => headingStyles[variant]}
  ${({ weight = 'medium' }) => weightStyles[weight]}
`;
