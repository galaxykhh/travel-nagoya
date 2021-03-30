import React from 'react';
import styled, { keyframes } from 'styled-components';
import FoodLists from './FoodLists';

const FadeUp = keyframes`
  from {
    opacity: 0;
    padding-top: 65px;
  };
  to {
    opacity: 1;
    padding-top: 0px;
  };
`;

const FLEX = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 300px;
  opacity: 0;
  animation: ${FadeUp} 1s ease forwards;
  animation-delay: 1s;
`;

const FoodListBox = ({ foodData, handleChangeFood }) => {
    return (
        <FLEX>
            {foodData.map(list => (
                <FoodLists list={list}
                    key={list.id}
                    handleChangeFood={handleChangeFood}
                />
            ))}
        </FLEX>
    );
};

export default FoodListBox;