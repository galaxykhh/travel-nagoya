import React from 'react';
import styled from 'styled-components';

const TourLists = ({ list, handleChangeTour }) => {
    const { path, category } = list;

    return (
        <>
            <CategoryBox onClick={handleChangeTour} >
                <IMG path={path} />
                <Menu> {category} </Menu>
            </CategoryBox>
        </>
    );
}

export default TourLists;

const IMG = styled.div`
    background: url(${props => props.path});
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 190px;
`;

const Menu = styled.div`
    margin-top: 30px;
    font-size: 25px;
`;

const CategoryBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-top: 90px;
    width: 400px;
    height: 300px;
    border: 0px solid #f5d3e0;
    border-radius: 50px;
    transition: background-color 0.7s ease;
    &:hover {
        cursor: pointer;
        background-color: #e8e8e9;
    };
`;