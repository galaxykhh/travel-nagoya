import React from 'react';
import styled from 'styled-components';
import { fadeUp } from '../../style/keyframes';
import FoodLists from './FoodLists';

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 300px;
    opacity: 0;
    animation: ${fadeUp} 1s ease forwards;
    animation-delay: 1s;
`;

const FoodListBox = ({ foodData, handleChangeFood }) => {
    return (
        <FlexBox>
            {foodData.map(list => (
                <FoodLists list={list}
                    key={list.id}
                    handleChangeFood={handleChangeFood}
                />
            ))}
        </FlexBox>
    );
};

export default FoodListBox;