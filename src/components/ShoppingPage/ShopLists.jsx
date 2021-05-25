import React from 'react';
import styled from 'styled-components';

const ShopLists = ({ list, clickEvent }) => {
    const { path, shopName } = list;

    return (
        <>
            <ShopBox onClick={() => clickEvent(shopName)}>
                <IMG src={path} />
                <ShopName> {shopName} </ShopName>
            </ShopBox>
        </>
    );
};

const ShopBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    transition:transform .5s ease;
    &:hover {
        cursor: pointer;
        transform:scale(1.02);
    }
`;

const IMG = styled.img`
    border-radius: 30px;
    width: 260px;
    height: 180px;
    margin-bottom: 15px;
`;

const ShopName = styled.div`
    font-size: 22px;
`;

export default ShopLists