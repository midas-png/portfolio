import { FC } from 'react';
import { IProps } from './props';
import { StyledTitleRoot } from './styles';

export const Title: FC<IProps> = ({ variant, weight, children }) => (
  <StyledTitleRoot variant={variant} weight={weight}>
    {children}
  </StyledTitleRoot>
);
