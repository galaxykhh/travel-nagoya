import React from 'react';
import styled from 'styled-components';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import FoodListBox from '../components/FoodPage/FoodListBox';
import InfoBox from '../components/FoodPage/InfoBox';
import { useHandlePage } from '../hook/useHandlePage';

const FoodPage = () => {
    const handler = useHandlePage('food');

    return (
        <FlexBox>
            <SelectedMent> 먹거리를 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 원하시는 메뉴를 골라주세요 </ChooseKindMent>
            <FoodListBox foodData={handler.data}
                handleChangeFood={handler.handleChangeItem}
            />
            <InfoBox selectedFood={handler.selectedData}
                ovrly={handler.ovrly}
                animate={handler.animate}
                hideOvrly={handler.hideOvrly}
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