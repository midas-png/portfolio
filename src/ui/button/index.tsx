import { FC } from 'react';
import { ButtonComponent } from './styles';
import { IProps } from './props';

export const Button: FC<IProps> = ({
  variant,
  size,
  shadow,
  children,
  onClick,
}) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      shadow={shadow}
      onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};
