import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavItem ({ item })  {
  const { to, children } = item;

  return (
    <Link to={to}> {children} </Link>
  );
}

const Link = styled(NavLink)`
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 550;
  color: #f4f7f7;
  opacity: 0.7;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`;

export default NavItem;