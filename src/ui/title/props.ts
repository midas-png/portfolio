import { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4';
type Weight = 'bold' | 'semibold' | 'medium';

export interface IProps {
  variant?: Variant;
  weight?: Weight;
  fontSize?: number;
  light?: boolean;
  children?: ReactNode;
}
