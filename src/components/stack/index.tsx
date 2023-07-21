import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ComponentWrapper,
  ComponentStackWrapper,
  HeaderWrapper,
  ButtonWrapper,
  StackWrapper,
  StackTechnology,
} from './styles';
import { LazyShow } from 'components';
import { Button, Title } from 'ui';
import { STACK, TYPES } from 'data';

type StackType = typeof TYPES[number];

export const Stack: FC = () => {
  const { t } = useTranslation();
  const [stackType, setStackType] = useState<StackType>('frontend');
  const stack = STACK[stackType];

  return (
    <LazyShow direction='left'>
      <ComponentWrapper>
        <Title fontSize={60}>{t('whatIUse')}</Title>
        <ComponentStackWrapper>
          <HeaderWrapper>
            {TYPES.map((name) => (
              <ButtonWrapper key={Math.random()}>
                <Button
                  variant={stackType === name ? 'tertiary' : 'secondary'}
                  size='large'
                  onClick={() => setStackType(name)}>
                  {t(name)}
                </Button>
              </ButtonWrapper>
            ))}
          </HeaderWrapper>
          <StackWrapper>
            {stack.map(({ name, Icon }) => (
              <StackTechnology key={Math.random()}>
                {name} {Icon && <Icon />}
              </StackTechnology>
            ))}
          </StackWrapper>
        </ComponentStackWrapper>
      </ComponentWrapper>
    </LazyShow>
  );
};
