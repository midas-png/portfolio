import styled from 'styled-components';

export const TextfieldComponent = styled.span`
  color: ${({ theme }) => theme.palette.common.white};
  padding-bottom: 3px;
  font-size: 50px;
  transition: all 0.2s ease-in-out;
  border-bottom: ${({ theme }) => `2px solid ${theme.palette.common.white}`};
  margin: 0 5px;
  word-break: break-all;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.palette.common.tertiary};
    border-color: ${({ theme }) => theme.palette.common.tertiary};
  }

  :empty:before {
    content: attr(placeholder);
    word-break: break-word;
    color: ${({ theme }) => theme.palette.placeholder};
  }

  @media screen and (max-width: 1024px) {
    font-size: 25px;
    margin: 0;
  }
`;
