import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../publicComponents/ScreenViewer';
import ReviewBox from './ReviewBox';

const InfoBox = ({ selectedFood, overlay, modal, hideOverlay, animate }) => {
    return (
        <Wrap overlay={overlay} onClick={hideOverlay} >
            <FlexBox >
                <ScreenViewer modal={modal}
                    animate={animate}
                >
                    <Food> {selectedFood?.food} </Food>
                    <Memo> {selectedFood?.memo} </Memo>
                    <ReviewBox imgPath={selectedFood?.imgPath}
                        restName={selectedFood?.restName}
                        restSub={selectedFood?.restSub}
                        linkTo={selectedFood?.linkTo}
                    />
                </ScreenViewer>
            </FlexBox>
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
    display: ${props => props.overlay};
    opacity: 1;
`;

const FlexBox = styled.div`
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