/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export interface ILanguages {
  label: string;
  code: string;
  flag: Array<ReactNode>;
}

export interface IProps {
  options: Array<string> | Array<ILanguages>;
  label?: ReactNode;
  defaultSelected?: string;
  onChange?: (option: string) => void;
}
