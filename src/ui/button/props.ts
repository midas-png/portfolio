import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type Size = 'small' | 'medium' | 'large' | 'parent';
type Shadow = 'primary' | 'secondary' | 'tertiary';

export interface IProps {
  children?: ReactNode;
  variant?: Variant;
  shadow?: Shadow;
  size?: Size;
  onClick?: () => void;
}
