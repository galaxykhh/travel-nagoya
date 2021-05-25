import React from 'react';
import styled from 'styled-components';

const Info = ({ item }) => {
    const { photo, memo } = item;
    return (
        <ItemBox>
            <Photo src={photo} />
            <PlaceName> {memo} </PlaceName>
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

const PlaceName = styled.div`
    margin-top: 20px;
    font-size: 25px;
    white-space: pre-wrap;
`;

const Photo = styled.img`
    border-radius: 20px;
    width: 300px;
    height: 230px;
`;