import React from 'react';
import styled from 'styled-components';
import { fadeUp } from '../style/keyframes';

const SelectedMent = ({ children }) => {
    return (
        <FlexBox> {children} </FlexBox>
    );
};

export default SelectedMent;

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    color: black;
    font-size: 50px;
    animation: ${fadeUp} .8s ease;
    @media only screen and (max-width: 540px) {
        font-size: 36px;
    };
`;