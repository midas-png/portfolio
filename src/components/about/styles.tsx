import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 50px 100px;
  background: ${({ theme }) => theme.palette.common.black};

  @media screen and (max-width: 1024px) {
    padding: 0 50px;
    padding-bottom: 50px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 25px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: fit-content(100%) 1fr;
  }
`;

export const AboutDescription = styled.span`
  line-height: 150%;
  height: fit-content;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const TreePathWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const TreePath = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export const TreePathCircleWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const TreePathCircleDescription = styled.span`
  position: absolute;
  top: 30%;
  right: 130px;
  width: 150px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.common.white};

  @media screen and (max-width: 786px) {
    right: 90px;
  }
`;

export const TreePathCompanyWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 130px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TreePathCompanyTitle = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const TreePathCompanySubtitle = styled.span`
  opacity: 0.5;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const TreePathCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50px;
  color: ${({ theme }) => theme.palette.common.white};
  border: ${({ theme }) => `2px solid ${theme.palette.common.tertiary}`};
  height: 100px;
  width: 100px;
`;

export const TreePathLine = styled.div`
  background: ${({ theme }) => theme.palette.common.tertiary};
  height: 70px;
  width: 2px;
`;

export const MainMarkerWrapper = styled.span`
  color: ${({ theme }) => theme.palette.common.tertiary};
`;
