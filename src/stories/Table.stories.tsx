import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from 'components/DataGrid/Table';
import { columns, rows } from 'mocks/testData/TableData';

export default {
  title: 'Example/Page',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Main = Template.bind({});
Main.args = {
  columns,
  rows,
  pageSize: 10,
};

export const Pagination = Template.bind({});
Pagination.args = {
  columns,
  rows,
  pageSize: 5,
  pagination: true,
};

export const HideColumns = Template.bind({});
HideColumns.args = {
  columns,
  rows,
  pageSize: 5,
  pagination: true,
  canHideColumns: true,
};
