import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../publicComponents/ScreenViewer';
import Info from './Info';
const InfoBox = ({ selectedShop, modal, overlay, hideOverlay, animate }) => {
    return (
        <Wrap overlay={overlay} onClick={hideOverlay} >
            <FlexBox >
                <ScreenViewer modal={modal}
                    animate={animate} >
                    <Info shopName={selectedShop?.shopName}
                        subTitle={selectedShop?.subTitle}
                    />
                </ScreenViewer>
            </FlexBox>
        </Wrap>
    );
};

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

export default InfoBox;