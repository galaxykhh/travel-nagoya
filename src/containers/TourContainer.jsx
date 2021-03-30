import React from 'react';
import styled from 'styled-components';
import SelectedMent from '../pubcomp/SelectedMent';
import ChooseKindMent from '../pubcomp/ChooseKindMent';

const FirstFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function TourContainer() {
    return (
        <FirstFlex>
            <SelectedMent> 볼거리를 선택해주셨네요! </SelectedMent>
            <ChooseKindMent> 여행 스타일이 어떻게 되세요? </ChooseKindMent>
        </FirstFlex>
    );
}

export default TourContainer;
