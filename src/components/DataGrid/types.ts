import type { ReactNode } from 'react';

export interface Column {
  width: number;
  name: string;
  display: string;
  align?: 'left' | 'right' | 'center';
  visible: boolean;
}

interface _ITableProps {
  columns: Column[];
  rows: object[];
  pageSize?: number;
  canHideColumns?: boolean;
}

export interface ITableLayoutProps extends _ITableProps {
  children?: ReactNode;
  currentPage?: number;
  canSettings?: boolean;
}

export interface ITableProps extends _ITableProps {
  startPage?: number;
  pagination?: boolean;
}

export interface ICellProps {
  width?: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
  type: 'th' | 'td';
  children?: ReactNode;
}
