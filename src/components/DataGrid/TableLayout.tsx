import React, { useEffect, useMemo, useState } from 'react';

import { Dropdown } from './Dropdown/Dropdown';
import { DropdownItem, DropdownTitle } from './Dropdown/DropdownStyles';
import {
  Cell,
  CellContent,
  SettingsCell,
  SettingsContent,
  SettingsIconStyled,
  TableBody,
  TableHeader,
  TableRow,
  TableWrapper,
} from './TableStyles';
import type { Column, ITableLayoutProps } from './types';

export const TableLayout: React.FC<ITableLayoutProps> = ({
  columns,
  rows,
  pageSize = 10,
  currentPage = 0,
  canSettings = false,
}) => {
  const [displayedRows, setDisplayedRows] = useState<object[][]>([]);
  const [internalColumns, setInternalColumns] = useState<Column[]>([]);

  const [showSettings, setShowSettings] = useState(false);

  const displayedColumns = useMemo(() => internalColumns.filter((e) => e.visible), [internalColumns]);

  useEffect(() => {
    if (!pageSize || pageSize >= rows.length) {
      setDisplayedRows([rows]);
    }

    setDisplayedRows(
      rows.reduce<object[][]>((acc, _, index, arr) => {
        if (index % pageSize === 0) acc.push(arr.slice(index, index + pageSize));

        return acc;
      }, [])
    );
  }, [rows, pageSize]);

  useEffect(() => {
    setInternalColumns(columns);
  }, [columns]);

  const changeColumnVisible = (name: string, visible: boolean) => {
    setInternalColumns((cols) =>
      cols.map((col) => {
        if (col.name === name) return { ...col, visible };

        return col;
      })
    );
  };

  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          {displayedColumns.map((column) => (
            <Cell type={'th'} key={column.name} width={`${column.width}px`}>
              <CellContent>{column.display}</CellContent>
            </Cell>
          ))}
          {canSettings && (
            <SettingsCell>
              <SettingsContent onClick={() => setShowSettings((e) => !e)}>
                <SettingsIconStyled active={showSettings} />
              </SettingsContent>
              <Dropdown show={showSettings}>
                <DropdownTitle>Мои настройки</DropdownTitle>
                {internalColumns.map((column) => (
                  <DropdownItem key={column.name}>
                    <input
                      onChange={(e) => changeColumnVisible(column.name, e.target.checked)}
                      id={`${column.name}_settings_dropdown`}
                      checked={column.visible}
                      type="checkbox"
                    />
                    <label htmlFor={`${column.name}_settings_dropdown`}>{column.display}</label>
                  </DropdownItem>
                ))}
              </Dropdown>
            </SettingsCell>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {(displayedRows[currentPage] || []).map((row) => (
          <TableRow>
            {displayedColumns.map((column) => (
              <Cell type="td" width={`${column.width}px`} key={column.name}>
                <CellContent>
                  {
                    // @ts-expect-error
                    row[column.name]
                  }
                </CellContent>
              </Cell>
            ))}
            {canSettings && <Cell type="td" />}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
