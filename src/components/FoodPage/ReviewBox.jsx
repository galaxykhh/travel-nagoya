import React from 'react';
import styled from 'styled-components';

const ReviewBox = ({imgPath, restName, restSub, linkTo}) => {
    return (
        <>
            <FirstAnnounce>아래 가게는 별점이 가장 높은 가게입니다!</FirstAnnounce>
            <Box as='a' href={linkTo} target="_blank" >
                <Img src={imgPath} />
                <Item>
                    <RestName> {restName} </RestName>
                    <Explain> {restSub} </Explain>
                </Item>
            </Box>
        </>
    );
};

export default ReviewBox;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    margin-top: 90px;
    background-color: #dcdee2;
    text-decoration: none;
    color: black;
    width: 75%;
    height: 200px;
    transition: background-color, transform .5s ease;
    &:hover {
        background-color: #d2d4d8;
        transform:scale(1.02);
    }
    @media only screen and (max-width: 660px) {
        flex-direction: column;
        height: 360px;
    }
`;

const Item = styled.div`
    width: 740px;
    flex-direction: column;
`;

const Img = styled.img`
    border-radius: 30px;
    margin-left: 30px;
    width: 160px;
    height: 160px;
    @media only screen and (max-width: 540px) {
        maring-left: 0;
        margin-bottom: 30px;
    }
`;

const Explain = styled.div`
    font-size: 16px;
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 30px;
    text-align: start;
    white-space: pre-wrap;
    @media only screen and (max-width: 980px) {
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 15px;
        font-size: 13px;
        text-align: center;
    }
    @media only screen and (max-width: 560px) {
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 15px;
        font-size: 10px;
        text-align: center;
    }
`;

const RestName = styled.div`
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 30px;
    text-align: start;
    white-space: pre-wrap;
    @media only screen and (max-width: 980px) {
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 15px;
        text-align: center;
    }
`;

const FirstAnnounce = styled.div`
    margin-top: 80px;
    font-size: 25px;
    @media only screen and (max-width: 540px) {
        font-size: 15px;
    }
`;