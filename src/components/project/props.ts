import { ReactNode } from 'react';

export interface IProps {
  name: ReactNode;
  company: ReactNode;
  description: ReactNode;
  link: string;
  reverse?: boolean;
}
