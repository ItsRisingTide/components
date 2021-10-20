import React from 'react';

import styled from 'styled-components';

import { ReactComponent as SettingsIcon } from 'components/DataGrid/assets/svg/settings.svg';

import type { ICellProps } from './types';

export const TableWrapper = styled.table`
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  position: relative;
`;

export const TableContainer = styled.div`
  background-color: #fff;
  width: fit-content;
  font-family: 'VTB Group', sans-serif;
`;

export const TableBody = styled.tbody``;

export const SettingsCell = styled.th`
  border-bottom: 1px solid #c4cad4;
`;

export const TableRow = styled.tr``;

export const CellContent = styled.div`
  padding: 0 12px;
  line-height: 16px;
  font-style: normal;
  font-size: 14px;
  color: #2b313b;
`;

export const Cell = (props: ICellProps) => {
  const StyledCell = styled(`${props.type}`)<ICellProps>`
    padding: 12px 0;
    width: ${(props) => props.width || 'auto'};
    border-bottom: 1px solid #c4cad4;
    text-align: ${(props) => props.align || 'left'};
    font-weight: ${(props) => (props.type === 'th' ? 500 : 400)};

    & ${CellContent} {
      border-left: ${(props) => (props.type === 'th' ? '1px solid #C4CAD4' : 'none')};
    }

    &:first-child ${CellContent} {
      border-left: none;
    }

    ${TableRow}:last-child & {
      border-bottom: ${(props) => props.type === 'td' && 'none'};
    }
  `;

  return React.createElement(StyledCell, props);
};

export const SettingsContent = styled.div`
  display: flex;
`;

// @ts-expect-error svg
export const SettingsIconStyled = styled(SettingsIcon)<{ active: boolean }>`
  &:hover path {
    fill: #0d69f2;
  }
  path {
    fill: ${(props) => (props.active ? '#0D69F2' : '#626F84')};
  }
  cursor: pointer;
`;
