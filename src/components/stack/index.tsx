import { useState, FC } from 'react';
import {
  ComponentWrapper,
  HeaderWrapper,
  ButtonWrapper,
  StackWrapper,
  StackTechnology,
} from './styles';
import { Button } from 'ui';
import { STACK } from 'data';

const TYPES = [
  'frontend',
  'backend',
  'languages',
  'testing',
  'database',
  'devops',
  'os',
] as const;

type StackType = typeof TYPES[number];

export const Stack: FC = () => {
  const [stackType, setStackType] = useState<StackType>('frontend');
  const stack = STACK[stackType];
  return (
    <ComponentWrapper>
      <HeaderWrapper>
        {TYPES.map((name) => (
          <ButtonWrapper key={Math.random()}>
            <Button
              variant={stackType === name ? 'primary' : 'secondary'}
              size='large'
              onClick={() => setStackType(name)}>
              {name}
            </Button>
          </ButtonWrapper>
        ))}
      </HeaderWrapper>
      <StackWrapper>
        {stack.map(({ name }) => (
          <StackTechnology key={Math.random()}>{name}</StackTechnology>
        ))}
      </StackWrapper>
    </ComponentWrapper>
  );
};
