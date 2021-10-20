import React, { useState } from 'react';

import { Pagination } from './Pagination/Pagination';
import { TableLayout } from './TableLayout';
import { TableContainer } from './TableStyles';
import type { ITableProps } from './types';

export const Table: React.FC<ITableProps> = ({
  rows,
  columns,
  pageSize = 10,
  startPage = 0,
  pagination = false,
  canHideColumns = false,
}) => {
  const [currentPage, setCurrentPage] = useState(startPage);

  const changePage = (direction: number) => {
    if (currentPage + direction >= 0 && currentPage + direction <= rows.length / pageSize)
      setCurrentPage((e) => e + direction);
  };

  return (
    <TableContainer>
      <TableLayout
        columns={columns}
        rows={rows}
        pageSize={pageSize}
        currentPage={currentPage}
        canSettings={canHideColumns}
      />
      {pagination && (
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          rowsCount={rows.length}
          onNextPage={() => changePage(+1)}
          onPrevPage={() => changePage(-1)}
        />
      )}
    </TableContainer>
  );
};
