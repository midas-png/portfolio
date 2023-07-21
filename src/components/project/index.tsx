import { FC } from 'react';
import {
  ProjectWrapper,
  ImageWrapper,
  ContentWrapper,
  TitleWrapper,
  ProjectDescription,
  ProjectImage,
  Subtitle,
} from './styles';
import { IProps } from './props';
import { Title } from 'ui';

export const Project: FC<IProps> = ({
  name,
  company,
  description,
  image,
  reverse,
}) => {
  return (
    <ProjectWrapper>
      <ImageWrapper reverse={reverse}>
        <ProjectImage src={image} />
      </ImageWrapper>
      <ContentWrapper reverse={reverse}>
        <TitleWrapper>
          <Title>{name}</Title>
          <Subtitle>{company}</Subtitle>
        </TitleWrapper>
        <ProjectDescription>{description}</ProjectDescription>
      </ContentWrapper>
    </ProjectWrapper>
  );
};
