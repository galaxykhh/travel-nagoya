import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SelectedMent from '../pubcomp/SelectedMent';
import ChooseKindMent from '../pubcomp/ChooseKindMent';
import FoodListBox from '../components/FoodPage/FoodListBox';
import InfoListBox from '../components/FoodPage/InfoListBox';
const URL = 'http://localhost:8000/foodinfo';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FoodContainer = () => {

  const [foodData, setFoodData] = useState([]); // API에서 가져온 배열을 이곳에 담는다
  const [hiddenState, setHiddenState] = useState('none'); // 설명 창의 display 제어

  const getData = async () => {
      const res = await axios.get(URL);
      if (!res) {
        console.log(`${res} is not undefined`)
        return;
      }
      setFoodData(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  // const handleClick = (foodName) => {
  //   console.log(foodName);
  // }

  return (
    <Flex>
      <SelectedMent> 먹거리를 선택해주셨네요! </SelectedMent>
      <ChooseKindMent> 원하시는 메뉴를 골라주세요 </ChooseKindMent>
      <FoodListBox foodData={foodData}  />
      <InfoListBox foodData={foodData} />
    </Flex>
  );
}

export default FoodContainer;