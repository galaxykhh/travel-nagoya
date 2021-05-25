import React from 'react';
import styled from 'styled-components';

const FoodLists = ({ item, handleChangeFood }) => {
    const { path, foodName } = item;

    return (
        <SBox onClick={handleChangeFood} >
        <IMG path={path} />
            <Menu> {foodName} </Menu>
        </SBox>
    );
};

export default FoodLists;

const IMG = styled.div`
    background: url(${props => props.path});
    background-size: contain;
    background-repeat: no-repeat;
    width: 140px;
    height: 140px;
    @media only screen and (max-width: 900px) {
        width: 100px;
        height: 100px;
    };
`;

const Menu = styled.div`
    font-size: 25px;
    @media only screen and (max-width: 900px) {
        font-size: 15px;
        padding-right: 30px;
    };
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
    };
    @media only screen and (max-width: 900px) {
        width: 90px;
        height: 90px;
    };
`;