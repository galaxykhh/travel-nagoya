import React from 'react';
import styled from 'styled-components';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import ShopListBox from '../components/ShoppingPage/ShopListBox';
import InfoBox from '../components/ShoppingPage/InfoBox';
import { useHandlePage } from '../hook/useHandlePage';

const ShoppingPage = () => {
    const handler = useHandlePage('shop');

    return (
        <FirstFlex>
            <SelectedMent> 쇼핑을 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 마음에 드실만한 쇼핑장소로 준비했습니다 </ChooseKindMent>
            <ShopListBox shopData={handler.data}
                handleChangeShop={handler.handleChangeItem}
            />
            <InfoBox selectedShop={handler.selectedData}
                ovrly={handler.ovrly}
                hideOvrly={handler.hideOvrly}
                animate={handler.animate}
            />
        </FirstFlex>
    );
};

export default ShoppingPage;

const FirstFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
