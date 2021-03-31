import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import SelectedMent from '../pubcomp/SelectedMent';
import ChooseKindMent from '../pubcomp/ChooseKindMent';
import ShopListBox from '../components/ShoppingPage/ShopListBox';
import InfoBox from '../components/ShoppingPage/InfoBox';
const shopURL = 'http://localhost:8000/shopinfo';
const NONE = 'none';
const BLOCK = 'block';

const FirstFlex = styled.div`
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

function TourContainer() {

    const [shopData, setShopData] = useState([]);
    const [shopName, setShopName] = useState();
    const [subtitle, setSubtitle] = useState();
    const [ovrly, setOvrly] = useState(NONE);
    const [animate, setAnimate] = useState(slideUp);

    const getShopData = async () => {
        const res = await axios.get(shopURL);
        if (!res) {
            console.log(`${res} is not undefined`)
            return;
        }
        setShopData(res.data);
    }

    useEffect(() => {
        getShopData();
    }, [])

    const handleChangeShop = (clickedShop) => {
        const selectedShop = shopData.find(({ shopName }) => shopName === clickedShop);
        const shopName = selectedShop.shopName;
        const subtitle = selectedShop.subtitle;
        setShopName(shopName);
        setSubtitle(subtitle);
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
            <FirstFlex>
                <SelectedMent> 쇼핑을 선택해주셨네요! </SelectedMent>
                <ChooseKindMent> 마음에 드실만한 쇼핑장소로 준비했습니다 </ChooseKindMent>
                <ShopListBox shopData={shopData}
                             handleChangeShop={handleChangeShop} />

                <InfoBox shopName={shopName}
                         subtitle={subtitle}
                         ovrly={ovrly}
                         hideOvrly={hideOvrly}
                         animate={animate}
                />
            </FirstFlex>
        </>
    );
}

export default TourContainer;
