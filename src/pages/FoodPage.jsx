import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import FoodListBox from '../components/FoodPage/FoodListBox';
import InfoBox from '../components/FoodPage/InfoBox';
import categoryRepository from '../repository/categoryRepository';
import { slideDown, slideUp } from '../style/keyframes';
const NONE = 'none';
const BLOCK = 'block';

const FoodPage = () => {
    const [foodData, setFoodData] = useState([]);
    const [selectedFood, setSelectedFood] = useState([]);
    const [ovrly, setOvrly] = useState(NONE);
    const [animate, setAnimate] = useState(slideUp);

    const getFoodData = async () => {
        try {
            const { data } = await categoryRepository.getFoodData();
            setFoodData(data);
        } catch(err) {
            console.log(err);
            alert('서버에 오류가 있습니다');
        };
    };

    useEffect(() => {
        getFoodData();
    }, []);

    const handleChangeFood = (clickedIndex) => {
        const data = foodData[clickedIndex]
        setSelectedFood(data);
        setOvrly(BLOCK);
    };

    const hideOvrly = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOvrly(NONE), 450);
        setTimeout(() => setAnimate(slideUp), 450);
        setAnimate(slideDown)
    };

    return (
        <FlexBox>
            <SelectedMent> 먹거리를 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 원하시는 메뉴를 골라주세요 </ChooseKindMent>
            <FoodListBox foodData={foodData}
                handleChangeFood={handleChangeFood}
            />
            <InfoBox selectedFood={selectedFood}
                ovrly={ovrly}
                animate={animate}
                hideOvrly={hideOvrly}
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