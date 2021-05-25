import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../publicComponents/ScreenViewer';
import ReviewBox from './ReviewBox';

const InfoBox = ({ food, memo, ovrly, modal, imgPath, restName, restSub, linkTo, hideOvrly, animate }) => {
    return (
        <Wrap ovrly={ovrly} onClick={hideOvrly} >
            <FLEX >
                <ScreenViewer modal={modal}
                    animate={animate}
                >
                    <Food> {food} </Food>
                    <Memo> {memo} </Memo>
                    <ReviewBox imgPath={imgPath}
                        restName={restName}
                        restSub={restSub}
                        linkTo={linkTo}
                    />
                </ScreenViewer>
            </FLEX>
        </Wrap>
    );
};

export default InfoBox;

const Wrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => props.ovrly};
    opacity: 1;
`;

const FLEX = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Food = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 40px;
    @media only screen and (max-width: 640px) {
        font-size: 23px;
    }
`;

const Memo = styled.div`
    font-size: 20px;
    margin-top: 50px;
    white-space: pre-wrap;
    @media only screen and (max-width: 640px) {
        font-size: 15px;
    };
`;