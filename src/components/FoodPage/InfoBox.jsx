import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../pubcomp/ScreenViewer';
import ReviewBox from './ReviewBox';

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

const H1 = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 40px;
`;

const H2 = styled.div`
    font-size: 20px;
    margin-top: 50px;
    white-space: pre-wrap;
`;


const InfoBox = ({ food, memo, ovrly, modal, imgPath, restName, restSub, hideOvrly, animate }) => {

    return (
        <Wrap ovrly={ovrly} onClick={hideOvrly} >
            <FLEX >
                <ScreenViewer modal={modal}
                              animate={animate} >
                    <H1> {food} </H1>
                    <H2> {memo} </H2>
                    <ReviewBox imgPath={imgPath}
                               restName={restName}
                               restSub={restSub}
                               />
                </ScreenViewer>
            </FLEX>
        </Wrap>
    );
}

export default InfoBox;