import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesWrapper, ListWrapper, ListItem } from './styles';
import { ARTICLES } from 'data';
import { LazyShow } from 'components';
import { Title, Button } from 'ui';

export const Articles: FC = () => {
  const { t } = useTranslation();
  return (
    <ArticlesWrapper>
      <LazyShow direction='left'>
        <Title fontSize={60} light>
          {t('articles')}
        </Title>
      </LazyShow>
      <LazyShow direction='left'>
        <ListWrapper>
          {ARTICLES.map(({ title, link }) => (
            <ListItem key={Math.random()}>
              <Title light>{title}</Title>
              <Button
                variant='quaternary'
                size='large'
                onClick={() => open(link)}>
                {t('read')}
              </Button>
            </ListItem>
          ))}
        </ListWrapper>
      </LazyShow>
    </ArticlesWrapper>
  );
};
