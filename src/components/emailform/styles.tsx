import styled from 'styled-components';

export const ComponentWrapper = styled.form<{ name: string }>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: ${({ theme }) => theme.palette.common.black};
  padding: 20px 50px;
  min-height: 50vh;
`;

export const FormWrapper = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PurpleContent = styled.span`
  color: ${({ theme }) => theme.palette.common.tertiary};
`;
