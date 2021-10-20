import React from 'react';

import { DropdownWrapper } from './DropdownStyles';

interface IDropdownProps {
  show: boolean;
}
// eslint-disable-next-line arrow-body-style
export const Dropdown: React.FC<IDropdownProps> = ({ children, show }) => {
  return show ? <DropdownWrapper>{children}</DropdownWrapper> : null;
};
