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
  MainMarkerWrapper,
} from './styles';
import { LazyShow } from 'components';
import { Title } from 'ui';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const About: FC = () => {
  return (
    <ComponentWrapper>
      <LazyShow direction='left'>
        <Title fontSize={60} light>
          About <MainMarkerWrapper>me</MainMarkerWrapper>
        </Title>
      </LazyShow>
      <AboutWrapper>
        <LazyShow direction='left'>
          <AboutDescription>
            I'm 21 years old enthusiastic computer science student and frontend
            developer from IThub College, based in Moscow, with one year of
            commertial experience in web development. Looking to deliver
            excellent web development skills in JavaScript and TypeScript to
            help grow the business. Also I was learning Python and Java in the
            college.
            <br /> I decided to become a programmer after I passed the exams for
            the universities to become a translator, but I accidentally pressed
            on play button of learning video about HTML, CSS and JavaScript and
            it became extremely interesting for me. So right before sending
            documents to the universities I decided to become a pro at
            programming. I went to private IT college called ITHub College and
            assigned a goal to become a Middle Programmer on my graduation.
            After 1.5 year of hard working, learning and successes of my team
            project, I got my first job as junior frontend developer. It helped
            me to get a lot of hard and soft skills. And now I'm searhing for
            new experience and goals to be achieved.
          </AboutDescription>
        </LazyShow>
        <LazyShow direction='right'>
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
                <TreePathCircle>3</TreePathCircle>
                <TreePathCompanyWrapper>
                  <TreePathCompanyTitle>
                    Maybe your company
                  </TreePathCompanyTitle>
                  <TreePathCompanySubtitle>
                    {`${monthNames[new Date().getMonth()]} 2023 -`}
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
