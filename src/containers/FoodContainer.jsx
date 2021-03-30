import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import SelectedMent from '../pubcomp/SelectedMent';
import ChooseKindMent from '../pubcomp/ChooseKindMent';
import FoodListBox from '../components/FoodPage/FoodListBox';
import InfoBox from '../components/FoodPage/InfoBox';
const FoodURL = 'http://localhost:8000/foodinfo';
const NONE = 'none';
const BLOCK = 'block';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const slideUp = keyframes`
  from {
      margin-top: 1400px;
      opacity: 1;
  }
  to {
      margin-top: 100px;
      opacity: 1;
  }
`;

const slideDown = keyframes`
    from {
        margin-top: 100px;
        opacity: 1;
    }
    to {
        margin-top: 1400px;
        opacity: 1;
    }
`;

const FoodContainer = () => {

    const [foodData, setFoodData] = useState([]); // 서버에서 총 받아온다
    const [food, setFood] = useState(); // 음식 이름을 전달해준다
    const [memo, setMemo] = useState(); // 전달받은 음식에 대한 설명
    const [imgPath, setImgPath] = useState(); // 가게 이미지
    const [restName, setRestName] = useState(); // 가게 이름
    const [restSub, setRestSub] = useState(); // 가게 설명
    const [ovrly, setOvrly] = useState(NONE); // 설명창 상태 토글
    const [animate, setAnimate] = useState(slideUp); // 모달창의 애니메이션 처리

    const getFoodData = async () => {
        const res = await axios.get(FoodURL);
        if (!res) {
            console.log(`${res} is not undefined`)
            return;
        }
        setFoodData(res.data);
    }

    useEffect(() => {
        getFoodData();
    }, [])

    const handleChangeFood = (clickedFood) => {
        const selectedFood = foodData.find(({ foodName }) => foodName === clickedFood);
        const foodName = selectedFood.foodName;
        const memo = selectedFood.memo;
        const restName = selectedFood.restName;
        const restSub = selectedFood.restSub;
        const imgPath = selectedFood.imgPath;
        setFood(foodName);
        setMemo(memo);
        setRestName(restName);
        setRestSub(restSub);
        setImgPath(imgPath);
        setOvrly(BLOCK);
    }

    const hideOvrly = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOvrly(NONE), 450);
        setTimeout(() => setAnimate(slideUp), 450);
        setAnimate(slideDown)
    }

    return (
        <>
            <Flex>
                <SelectedMent> 먹거리를 선택해주셨네요! </SelectedMent>
                <ChooseKindMent> 원하시는 메뉴를 골라주세요 </ChooseKindMent>
                <FoodListBox foodData={foodData}
                             handleChangeFood={handleChangeFood}
                />
                <InfoBox food={food}
                         memo={memo}
                         imgPath={imgPath}
                         restName={restName}
                         restSub={restSub}
                         ovrly={ovrly}
                         animate={animate}
                         hideOvrly={hideOvrly}

                />
            </Flex>
        </>
    );
}

export default FoodContainer;