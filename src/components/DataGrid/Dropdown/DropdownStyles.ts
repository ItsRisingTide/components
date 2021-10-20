import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: absolute;
  padding: 8px 0;
  background-color: #fff;
  box-shadow: 0 4px 16px rgba(138, 150, 168, 0.4), 0 0 6px rgba(138, 150, 168, 0.08);
  border-radius: 4px;
  width: 280px;
  right: calc(0px - 24px);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 6px 12px;

  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  font-weight: normal;
  color: #2b313b;

  display: flex;

  &:hover {
    background-color: #f1f2f4;
  }
`;

export const DropdownTitle = styled.div`
  padding: 6px 12px;
  font-style: normal;
  font-weight: bolder;
  font-size: 14px;
  line-height: 20px;
  color: #2b313b;
  display: flex;
`;
