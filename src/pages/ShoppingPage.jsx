import React from 'react';
import styled from 'styled-components';
import SelectedAnnounce from '../publicComponents/SelectedAnnounce';
import ChooseKindAnnounce from '../publicComponents/ChooseKindAnnounce';
import ShopListBox from '../components/ShoppingPage/ShopListBox';
import InfoBox from '../components/ShoppingPage/InfoBox';
import { useData } from '../hook/useData';

const ShoppingPage = () => {
    const handler = useData('shop');

    return (
        <FirstFlex>
            <SelectedAnnounce> 쇼핑을 선택해주셨네요! </SelectedAnnounce>
            <ChooseKindAnnounce> 마음에 드실만한 쇼핑장소로 준비했습니다 </ChooseKindAnnounce>
            <ShopListBox shopData={handler.data}
                handleChangeShop={handler.handleChangeItem}
            />
            <InfoBox selectedShop={handler.selectedData}
                overlay={handler.overlay}
                hideOverlay={handler.hideOverlay}
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
