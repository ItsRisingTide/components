import React from 'react';

import { ReactComponent as ArrowIcon } from 'components/DataGrid/assets/svg/arrow.svg';

import {
  LeftPaginationButton,
  PaginationWrapper,
  RightPaginationButton,
  TextContent,
  TextSeparator,
} from './PaginationStyles';

interface IPaginationProps {
  rowsCount: number;
  pageSize: number;
  currentPage: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  rowsCount,
  pageSize,
  currentPage,
  onNextPage,
  onPrevPage,
}) => (
  <PaginationWrapper>
    <TextContent>{`Записей на странице: ${pageSize}`}</TextContent>
    <TextSeparator />
    <TextContent>
      {`${pageSize * currentPage + 1}-${
        pageSize * currentPage + pageSize > rowsCount ? rowsCount : pageSize * currentPage + pageSize
      } записей из ${rowsCount}`}
    </TextContent>
    <TextSeparator />
    <TextContent>{`${currentPage + 1} из ${((rowsCount / pageSize) | 0) + 1} страниц`}</TextContent>
    <LeftPaginationButton onClick={onPrevPage}>
      <ArrowIcon />
    </LeftPaginationButton>
    <RightPaginationButton onClick={onNextPage}>
      <ArrowIcon />
    </RightPaginationButton>
  </PaginationWrapper>
);
