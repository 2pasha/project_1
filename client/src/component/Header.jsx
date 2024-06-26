import React from 'react';
import { NavItem } from './NavItem';

export const Header = () => {
  return (
    <div className="tabs is-centered is-medium">
      <ul>
        <NavItem to="/category" label="Categories" />
        <NavItem to="/transaction" label="Transactions" />
        <NavItem to="/report" label="Reports" />
      </ul>
    </div>
  );
};