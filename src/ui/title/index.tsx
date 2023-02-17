import { FC } from 'react';
import { IProps } from './props';
import { StyledTitleRoot } from './styles';

export const Title: FC<IProps> = ({
  variant,
  weight,
  fontSize,
  light,
  children,
}) => (
  <StyledTitleRoot
    variant={variant}
    weight={weight}
    fontSize={fontSize}
    light={light}>
    {children}
  </StyledTitleRoot>
);
