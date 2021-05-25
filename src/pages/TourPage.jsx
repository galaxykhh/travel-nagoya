import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import TourListBox from '../components/TourPage/TourListBox';
import InfoBox from '../components/TourPage/InfoBox';
import { slideUp, slideDown } from '../style/keyframes';
const tourURL = 'http://localhost:8000/tourinfo';
const NONE = 'none';
const BLOCK = 'block';

function TourPage() {
    const [tourData, setTourData] = useState([]);
    const [title, setTitle] = useState();
    const [memo1, setMemo1] = useState();
    const [memo2, setMemo2] = useState();
    const [memo3, setMemo3] = useState();
    const [memo4, setMemo4] = useState();
    const [photo1, setPhoto1] = useState();
    const [photo2, setPhoto2] = useState();
    const [photo3, setPhoto3] = useState();
    const [photo4, setPhoto4] = useState();
    const [ovrly, setOvrly] = useState(NONE);
    const [animate, setAnimate] = useState(slideUp);

    const getTourData = async () => {
        const res = await axios.get(tourURL);
        if (!res) {
            console.log(`${res} is not undefined`)
            return;
        }
        setTourData(res.data);
    }

    useEffect(() => {
        getTourData();
    }, [])

    const handleChangeTour = (clickedCategory) => {
        const selectedCategory = tourData.find(({ category }) => category === clickedCategory);
        const title = selectedCategory.title;
        const memo1 = selectedCategory.memo1;
        const memo2 = selectedCategory.memo2;
        const memo3 = selectedCategory.memo3;
        const memo4 = selectedCategory.memo4;
        const photo1 = selectedCategory.photo1;
        const photo2 = selectedCategory.photo2;
        const photo3 = selectedCategory.photo3;
        const photo4 = selectedCategory.photo4;
        setTitle(title);
        setMemo1(memo1);
        setMemo2(memo2);
        setMemo3(memo3);
        setMemo4(memo4);
        setPhoto1(photo1);
        setPhoto2(photo2);
        setPhoto3(photo3);
        setPhoto4(photo4);
        setOvrly(BLOCK);
    };

    const hideOvrly = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOvrly(NONE), 450); // slideDown 애니메이션이 끝날즈음에 오버레이를 꺼주고,
        setTimeout(() => setAnimate(slideUp), 450); // 다시 음식을 선택했을때 창이 올라와야하니 slideUp으로 바꿔준다.
        setAnimate(slideDown)
    };

    return (
        <FirstFlex>
            <SelectedMent> 볼거리를 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 어떤 카테고리가 마음에 드세요? </ChooseKindMent>
            <TourListBox tourData={tourData}
                handleChangeTour={handleChangeTour}
            />
            <InfoBox title={title}
                memo1={memo1}
                memo2={memo2}
                memo3={memo3}
                memo4={memo4}
                photo1={photo1}
                photo2={photo2}
                photo3={photo3}
                photo4={photo4}
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
