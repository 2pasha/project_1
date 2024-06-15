import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'is-active' : '')}
      end
    >
      {({ isActive }) => (
        <li className={isActive ? 'is-active' : ''}>
          <NavLink to={to}>{label}</NavLink>
        </li>
      )}
    </NavLink>
  );
};