/* eslint-disable no-unused-vars */
import { FormEvent } from 'react';

export interface IProps {
  placeholder: string;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
}
