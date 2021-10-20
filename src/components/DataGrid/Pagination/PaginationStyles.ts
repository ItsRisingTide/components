import styled from 'styled-components';

import { ReactComponent as SeparatorIcon } from 'components/DataGrid/assets/svg/arrow.svg';

export const RightPaginationButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #e2e5e9;
  padding: 8px;
  cursor: pointer;
`;

export const LeftPaginationButton = styled(RightPaginationButton)`
  transform: rotate(180deg);
  margin-right: 8px;
  margin-left: 12px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: flex-end;
`;

export const TextContent = styled.div`
  line-height: 20px;
  font-size: 14px;
  padding: 10px 12px;
  white-space: nowrap;
  color: #2b313b;
`;

export const TextSeparator = styled(SeparatorIcon)`
  margin: 8px 0;
`;
