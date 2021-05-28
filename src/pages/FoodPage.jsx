import React from 'react';
import styled from 'styled-components';
import SelectedAnnounce from '../publicComponents/SelectedAnnounce';
import ChooseKindAnnounce from '../publicComponents/ChooseKindAnnounce';
import FoodListBox from '../components/FoodPage/FoodListBox';
import InfoBox from '../components/FoodPage/InfoBox';
import { useData } from '../hook/useData';

const FoodPage = () => {
    const handler = useData('food');

    return (
        <FlexBox>
            <SelectedAnnounce> 먹거리를 선택해주셨네요! </SelectedAnnounce>
            <ChooseKindAnnounce> 원하시는 메뉴를 골라주세요 </ChooseKindAnnounce>
            <FoodListBox foodData={handler.data}
                handleChangeFood={handler.handleChangeItem}
            />
            <InfoBox selectedFood={handler.selectedData}
                overlay={handler.overlay}
                animate={handler.animate}
                hideOverlay={handler.hideOverlay}
            />
        </FlexBox>
    );
};

export default FoodPage;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;