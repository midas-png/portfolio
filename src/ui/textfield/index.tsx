import { FC } from 'react';
import { IProps } from './props';
import { TextfieldComponent } from './styles';

export const Textfield: FC<IProps> = ({ placeholder, onInput }: IProps) => {
  return (
    <TextfieldComponent
      contentEditable
      placeholder={placeholder}
      onInput={onInput}
    />
  );
};
