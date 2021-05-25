import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../publicComponents/ScreenViewer';
import Info from './Info';

const InfoBox = ({ selectedTour, ovrly, hideOvrly, animate, modal }) => {
    return (
        <Wrap ovrly={ovrly} onClick={hideOvrly} >
            <FlexBox>
                <ScreenViewer modal={modal}
                    animate={animate}
                >
                    <GridBox>
                    {selectedTour?.map(item => (
                        <Info item={item}
                            key={item.id}
                        />
                    ))}
                    </GridBox>
                </ScreenViewer>
            </FlexBox>
        </Wrap >
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

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-areas: 
    'a b'
    'c d';
`;