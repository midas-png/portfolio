import { FC } from 'react';
import {
  ProjectWrapper,
  ImageWrapper,
  ContentWrapper,
  TitleWrapper,
  ProjectDescription,
  Subtitle,
} from './styles';
import { IProps } from './props';
import { Button, Title } from 'ui';

export const Project: FC<IProps> = ({
  name,
  company,
  description,
  link,
  reverse,
}) => {
  return (
    <ProjectWrapper>
      <ImageWrapper reverse={reverse}></ImageWrapper>
      <ContentWrapper reverse={reverse}>
        <TitleWrapper>
          <Title>{name}</Title>
          <Subtitle>{company}</Subtitle>
        </TitleWrapper>
        <ProjectDescription>{description}</ProjectDescription>
        <div>
          <Button onClick={() => open(link)}>Learn more</Button>
        </div>
      </ContentWrapper>
    </ProjectWrapper>
  );
};
