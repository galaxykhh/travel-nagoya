import React from 'react';
import styled from 'styled-components';


const Info = ({ shopName, subTitle }) => {
    return (
        <>
            <ShopName> {shopName} </ShopName>
            <SubTitle> {subTitle} </SubTitle>
        </>
    );
};

export default Info;

const ShopName = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 40px;
`;

const SubTitle = styled.div`
    font-size: 20px;
    margin-top: 50px;
    white-space: pre-wrap;
`;