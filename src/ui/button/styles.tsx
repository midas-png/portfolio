/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components';
import { IProps } from './props';

const variantMap = {
  primary: css`
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.palette.common.black} 50%, ${theme.palette.common.white} 50%) right`};
    background-size: 200% 100%;
    color: ${({ theme }) => theme.palette.common.white};

    &:hover {
      background-position: left;
      color: ${({ theme }) => theme.palette.common.black};
    }
  `,
  secondary: css`
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.palette.common.black} 50%, ${theme.palette.common.white} 50%) right`};
    background-size: 200% 100%;
    color: ${({ theme }) => theme.palette.common.white};
    border: ${({ theme }) => `2px solid ${theme.palette.common.white}`};

    &:hover {
      background-position: left;
      color: ${({ theme }) => theme.palette.common.black};
    }
  `,
  tertiary: css`
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  quaternary: css`
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  `,
};

const sizeMap = {
  small: css`
    padding: 6px 12px;
  `,
  medium: css`
    padding: 10px 30px;
  `,
  large: css`
    padding: 12px 60px;
  `,
  parent: css`
    height: 100%;
    width: 100%;
  `,
};

const shadowMap = {
  primary: css`
    border: 3px solid ${({ theme }) => theme.palette.common.black};
    box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.white};
  `,
  secondary: css`
    border: 3px solid ${({ theme }) => theme.palette.common.white};
    box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.black};
  `,
  tertiary: css`
    border: 3px solid ${({ theme }) => theme.palette.common.black};
    box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.black};
  `,
};

export const ButtonComponent = styled.button<IProps>`
  font-weight: 800;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${({ variant = 'primary' }) => variantMap[variant]};
  ${({ size = 'medium' }) => sizeMap[size]};
  ${({ shadow }) => shadow && shadowMap[shadow]};

  &:active {
    transform: scale(0.9);
  }
`;
