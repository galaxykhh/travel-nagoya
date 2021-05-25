import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SelectedMent from '../publicComponents/SelectedMent';
import ChooseKindMent from '../publicComponents/ChooseKindMent';
import ShopListBox from '../components/ShoppingPage/ShopListBox';
import InfoBox from '../components/ShoppingPage/InfoBox';
import { slideUp, slideDown } from '../style/keyframes';
import categoryRepository from '../repository/categoryRepository';
const shopURL = 'http://localhost:8000/shopinfo';
const NONE = 'none';
const BLOCK = 'block';

const ShoppingPage = () => {
    const [shopData, setShopData] = useState([]);
    const [shopName, setShopName] = useState();
    const [subtitle, setSubtitle] = useState();
    const [ovrly, setOvrly] = useState(NONE);
    const [animate, setAnimate] = useState(slideUp);

    const getShoppingData = async () => {
        try {
            const { data } = await categoryRepository.getShoppingData();
            setShopData(data);
        } catch(err) {
            console.log(err);
            alert('서버에 오류가 있습니다');
        };
    }

    useEffect(() => {
        getShoppingData();
    }, []);

    const handleChangeShop = (clickedShop) => {
        const selectedShop = shopData.find(({ shopName }) => shopName === clickedShop);
        const shopName = selectedShop.shopName;
        const subtitle = selectedShop.subtitle;
        setShopName(shopName);
        setSubtitle(subtitle);
        setOvrly(BLOCK);
    };

    const hideOvrly = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOvrly(NONE), 450);
        setTimeout(() => setAnimate(slideUp), 450);
        setAnimate(slideDown);
    };

    return (
        <FirstFlex>
            <SelectedMent> 쇼핑을 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 마음에 드실만한 쇼핑장소로 준비했습니다 </ChooseKindMent>
            <ShopListBox shopData={shopData}
                handleChangeShop={handleChangeShop}
            />
            <InfoBox shopName={shopName}
                subtitle={subtitle}
                ovrly={ovrly}
                hideOvrly={hideOvrly}
                animate={animate}
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
