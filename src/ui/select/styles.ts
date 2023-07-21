import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border: 2px solid black;
  cursor: pointer;
  margin: 0 auto;
`;

export const SelectHeader = styled.div`
  font-size: 18px;
  letter-spacing: 0.7px;
  cursor: pointer;
`;

export const SelectHeaderWrapper = styled.div<{ onClick?: any }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  align-items: center;
`;

export const SelectListWrapper = styled.div`
  position: absolute;
  margin-top: 50px;
`;

export const SelectList = styled.ul<{ open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({ open }) => (open ? '1' : '0')};
  font-size: 18px;
  letter-spacing: 0.7px;
  margin: 0 auto;
  border: ${({ open }) => (open ? '2px solid #000' : 'none')};
  transition: 200ms opacity ease-in-out;
  z-index: 2;
`;

export const SelectItem = styled.li<{ open: boolean }>`
  display: ${({ open }) => !open && 'none'};
  position: relative;
  list-style: none;
  padding: 10px;
  height: 100%;

  &:hover {
    background: #c0c0c0;
  }
`;

export const SelectLabel = styled.span`
  font-size: 10px;
  letter-spacing: 0.5px;
`;
