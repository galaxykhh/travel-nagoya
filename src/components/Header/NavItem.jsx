import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem =  ({ item }) => {
  const { to, children } = item;

  return (
    <Link to={to}> {children} </Link>
  );
};

export default NavItem;

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