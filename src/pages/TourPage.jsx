import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import TourListBox from '../components/TourPage/TourListBox';
import InfoBox from '../components/TourPage/InfoBox';
import { slideUp, slideDown } from '../style/keyframes';
import categoryRepository from '../repository/categoryRepository';
const NONE = 'none';
const BLOCK = 'block';

const TourPage = () => {
    const [tourData, setTourData] = useState([]);
    const [selectedTour, setSelectedTour] = useState([]);
    const [ovrly, setOvrly] = useState(NONE);
    const [animate, setAnimate] = useState(slideUp);

    const getTourData = async () => {
        try {
            const { data } = await categoryRepository.getTourData();
            setTourData(data);
        } catch(err) {
            console.log(err);
            alert('서버에 오류가 있습니다');
        };
    };

    useEffect(() => {
        getTourData();
    }, []);

    const handleChangeTour = (clickedIndex) => {
        const data = tourData[clickedIndex];
        setSelectedTour(data);
        setOvrly(BLOCK);
    };

    const hideOvrly = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOvrly(NONE), 450); // slideDown 애니메이션이 끝날즈음에 오버레이를 꺼주고,
        setTimeout(() => setAnimate(slideUp), 450); // 다시 음식을 선택했을때 창이 올라와야하니 slideUp으로 바꿔준다.
        setAnimate(slideDown);
    };

    return (
        <FirstFlex>
            <SelectedMent> 볼거리를 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 어떤 카테고리가 마음에 드세요? </ChooseKindMent>
            <TourListBox tourData={tourData}
                handleChangeTour={handleChangeTour}
            />
            <InfoBox selectedTour={selectedTour}
                hideOvrly={hideOvrly}
                ovrly={ovrly}
                animate={animate} />
        </FirstFlex>
    );
};

export default TourPage;

const FirstFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
