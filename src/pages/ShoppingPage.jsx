import React from 'react';
import styled from 'styled-components';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import ShopListBox from '../components/ShoppingPage/ShopListBox';
import InfoBox from '../components/ShoppingPage/InfoBox';
import { useData } from '../hook/useData';

const ShoppingPage = () => {
    const handler = useData('shop');

    return (
        <FirstFlex>
            <SelectedMent> 쇼핑을 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 마음에 드실만한 쇼핑장소로 준비했습니다 </ChooseKindMent>
            <ShopListBox shopData={handler.data}
                handleChangeShop={handler.handleChangeItem}
            />
            <InfoBox selectedShop={handler.selectedData}
                ovrly={handler.overlay}
                hideOvrly={handler.hideOverlay}
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
