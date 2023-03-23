import { ReactNode } from 'react';

export interface IProps {
  name: ReactNode;
  company: ReactNode;
  description: ReactNode;
  link?: string;
  image: string;
  reverse?: boolean;
}
