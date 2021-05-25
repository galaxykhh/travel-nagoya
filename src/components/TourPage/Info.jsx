import React from 'react';
import styled from 'styled-components';

const Info = ({ item }) => {
    const { photo, memo } = item;
    return (
        <ItemBox>
            <Photo src={photo} />
            <H2> {memo} </H2>
        </ItemBox>
    );
};

export default Info;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    margin-top: 35px;
    padding: 30px;
    text-decoration: none;
    color: black;
    transition:transform .5s ease;
    &:hover {
        transform:scale(1.03);
    };
`;

const H1 = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 30px;
    @media only screen and (max-width: 540px) {
        font-size: 20px;
    };
`;

const H2 = styled.div`
    margin-top: 20px;
    font-size: 25px;
    white-space: pre-wrap;
`;

const Photo = styled.img`
    border-radius: 20px;
    width: 300px;
    height: 230px;
`;