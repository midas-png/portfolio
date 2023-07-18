import { FC } from 'react';
import { ArticlesWrapper, ListWrapper, ListItem } from './styles';
import { ARTICLES } from 'data';
import { LazyShow } from 'components';
import { Title, Button } from 'ui';

export const Articles: FC = () => {
  return (
    <ArticlesWrapper>
      <LazyShow direction='left'>
        <Title fontSize={60} light>
          Articles
        </Title>
      </LazyShow>
      <ListWrapper>
        <LazyShow direction='left'>
          {ARTICLES.map(({ title, link }) => (
            <ListItem key={Math.random()}>
              <Title light>{title}</Title>
              <Button
                variant='quaternary'
                size='large'
                onClick={() => open(link)}>
                Read
              </Button>
            </ListItem>
          ))}
        </LazyShow>
      </ListWrapper>
    </ArticlesWrapper>
  );
};
