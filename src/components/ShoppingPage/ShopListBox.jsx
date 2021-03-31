import React from 'react';
import ShopLists from './ShopLists';
import styled, { keyframes } from 'styled-components';

const FadeUp = keyframes`
  from {
    opacity: 0;
    padding-top: 65px;
  }
  to {
    opacity: 1;
    padding-top: 0px;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 1500px;
    opacity: 0;
    animation: ${FadeUp} .8s ease forwards;
    animation-delay: 1s;
`;

const ShopListBox = ({ shopData, handleChangeShop }) => {
    return (
        <Container>
            {shopData.map(list => (
                <ShopLists list={list} key={list.id} clickEvent={handleChangeShop} />
            ))}
        </Container>
    )
}

export default ShopListBox;