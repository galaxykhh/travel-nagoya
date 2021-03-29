import React from 'react';
import styled from 'styled-components';

const IMG = styled.div`
  background: url(${props => props.path});
  background-size: contain;
  background-repeat: no-repeat;
  width: 140px;
  height: 140px;
`;

const Menu = styled.div`
  font-size: 25px;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 50px;
  width: 170px;
  height: 170px;
  border: 0px solid #f5d3e0;
  border-radius: 50px;
  transition: background-color 0.7s ease;
  &:hover {
    cursor: pointer;
    background-color: #e8e8e9;
  }
`;

function FoodLists({ list }) {
  const { path, food } = list;

  return (
    <>
        <SBox >
          <IMG path={path} />
          <Menu> {food} </Menu>
        </SBox>
    </>
  );
}

export default FoodLists;