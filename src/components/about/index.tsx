import { FC } from 'react';
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
} from './styles';
import { Title } from 'ui';

export const About: FC = () => {
  return (
    <ComponentWrapper>
      <Title fontSize={60}>About me</Title>
      <AboutWrapper>
        <AboutDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </AboutDescription>
        <TreePathWrapper>
          <TreePath>
            <TreePathCircleWrapper>
              <TreePathCircleDescription>
                Private college education
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
                Junior Frontend Developer
              </TreePathCircleDescription>
              <TreePathCircle>2</TreePathCircle>
              <TreePathCompanyWrapper>
                <TreePathCompanyTitle>IThub Group</TreePathCompanyTitle>
                <TreePathCompanySubtitle>
                  March 2022 - Feb 2023 <br /> (1 year)
                </TreePathCompanySubtitle>
              </TreePathCompanyWrapper>
            </TreePathCircleWrapper>
            <TreePathLine />
            <TreePathCircleWrapper>
              <TreePathCircleDescription>
                Pre-middle / Middle Frontend Developer
              </TreePathCircleDescription>
              <TreePathCircle>3</TreePathCircle>
              <TreePathCompanyWrapper>
                <TreePathCompanyTitle>Your Company</TreePathCompanyTitle>
                <TreePathCompanySubtitle>March 2023 -</TreePathCompanySubtitle>
              </TreePathCompanyWrapper>
            </TreePathCircleWrapper>
            <TreePathLine />
          </TreePath>
        </TreePathWrapper>
      </AboutWrapper>
    </ComponentWrapper>
  );
};
