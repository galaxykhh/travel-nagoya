import React from 'react';
import styled from 'styled-components';
import { fadeUp } from '../style/keyframes';

const ChooseKindMent = ({ children }) => {
    return (
        <FlexBox> {children} </FlexBox>
    );
}

export default ChooseKindMent;

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
    color: black;
    font-size: 35px;
    opacity: 0;
    animation: ${fadeUp} .8s ease forwards;
    animation-delay: 0.7s;
    @media only screen and (max-width: 540px) {
        font-size: 26px;
    };
`;