import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ComponentWrapper,
  AboutWrapper,
  AboutDescription,
  TreePathWrapper,
  TreePath,
  TreePathCircleWrapper,
  TreePathCircle,
  TreePathLine,
  TreePathCircleDescription,
  TreePathCompanyWrapper,
  TreePathCompanyTitle,
  TreePathCompanySubtitle,
  MainMarkerWrapper,
} from './styles';
import { LazyShow } from 'components';
import { Title } from 'ui';

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <ComponentWrapper>
      <LazyShow direction='left'>
        <Title fontSize={60} light>
          {t('aboutAbout')}{' '}
          <MainMarkerWrapper>{t('aboutMe')}</MainMarkerWrapper>
        </Title>
      </LazyShow>
      <AboutWrapper>
        <LazyShow direction='left'>
          <AboutDescription>
            {t('aboutTextFirst')}
            <br />
            {t('aboutTextSecond')}
          </AboutDescription>
        </LazyShow>
        <LazyShow direction='right'>
          <TreePathWrapper>
            <TreePath>
              <TreePathCircleWrapper>
                <TreePathCircleDescription>
                  {t('collegeEducation')}
                </TreePathCircleDescription>
                <TreePathCircle>1</TreePathCircle>
                <TreePathCompanyWrapper>
                  <TreePathCompanyTitle>IThub College</TreePathCompanyTitle>
                  <TreePathCompanySubtitle>2020 - 2023</TreePathCompanySubtitle>
                </TreePathCompanyWrapper>
              </TreePathCircleWrapper>
              <TreePathLine />
              <TreePathCircleWrapper>
                <TreePathCircleDescription>
                  Frontend Developer
                </TreePathCircleDescription>
                <TreePathCircle>2</TreePathCircle>
                <TreePathCompanyWrapper>
                  <TreePathCompanyTitle>IThub Group</TreePathCompanyTitle>
                  <TreePathCompanySubtitle>
                    {t('collegeExperienceRange')} <br />{' '}
                    {t('collegeExperience')}
                  </TreePathCompanySubtitle>
                </TreePathCompanyWrapper>
              </TreePathCircleWrapper>
              <TreePathLine />
              <TreePathCircleWrapper>
                <TreePathCircleDescription>
                  Middle Frontend Developer
                </TreePathCircleDescription>
                <TreePathCircle>3</TreePathCircle>
                <TreePathCompanyWrapper>
                  <TreePathCompanyTitle>AMMC</TreePathCompanyTitle>
                  <TreePathCompanySubtitle>
                    {t('ammcExperienceRange')}
                  </TreePathCompanySubtitle>
                </TreePathCompanyWrapper>
              </TreePathCircleWrapper>
              <TreePathLine />
            </TreePath>
          </TreePathWrapper>
        </LazyShow>
      </AboutWrapper>
    </ComponentWrapper>
  );
};
