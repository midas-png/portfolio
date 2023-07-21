/* eslint-disable no-unused-vars */
import { useState, useRef, FC } from 'react';
import {
  SelectWrapper,
  SelectHeader,
  SelectHeaderWrapper,
  SelectListWrapper,
  SelectList,
  SelectItem,
} from './styles';
import { ILanguages, IProps } from './props';

export const Select: FC<IProps> = ({ options, defaultSelected, onChange }) => {
  const [open, toggleOpen] = useState(false);
  const [selected, setSelected] = useState((): string | ILanguages | null => {
    if (defaultSelected) return defaultSelected;
    else if ((options || []).length !== 0) return options[0];
    else if (typeof selected === 'string') return selected;
    else if (typeof selected !== 'string') return selected?.label || null;
    return null;
  });
  const selectRef = useRef<HTMLInputElement>(null);

  const handleSelectClick = (value: string) => () => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
    toggleOpen((prev) => !prev);
  };

  return (
    <SelectWrapper ref={selectRef}>
      <SelectHeaderWrapper onClick={() => toggleOpen(!open)}>
        <SelectHeader>
          {typeof selected === 'string' ? selected : selected?.label}
        </SelectHeader>
      </SelectHeaderWrapper>
      <SelectListWrapper>
        <SelectList open={open}>
          {options.map((item) => {
            const label = typeof item === 'string' ? item : item.label;
            const code = typeof item === 'string' ? item : item.code;
            return (
              <SelectItem
                open={open}
                onClick={handleSelectClick(code)}
                key={Math.random()}>
                {label}
              </SelectItem>
            );
          })}
        </SelectList>
      </SelectListWrapper>
    </SelectWrapper>
  );
};
