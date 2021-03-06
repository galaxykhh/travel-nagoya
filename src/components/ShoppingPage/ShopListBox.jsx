import React from 'react';
import ShopLists from './ShopLists';
import styled from 'styled-components';
import { fadeUp } from '../../style/keyframes';

const ShopListBox = ({ shopData, handleChangeShop }) => {
    return (
        <Container>
            {shopData?.map((item, index) => (
                <ShopLists item={item}
                    key={item.id}
                    handleChangeShop={() => handleChangeShop(index)}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 1500px;
    opacity: 0;
    animation: ${fadeUp} .8s ease forwards;
    animation-delay: 1s;
`;

export default ShopListBox;