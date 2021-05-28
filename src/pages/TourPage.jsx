import React from 'react';
import styled from 'styled-components';
import SelectedAnnounce from '../publicComponents/SelectedAnnounce';
import ChooseKindAnnounce from '../publicComponents/ChooseKindAnnounce';
import TourListBox from '../components/TourPage/TourListBox';
import InfoBox from '../components/TourPage/InfoBox';
import { useData } from '../hook/useData';

const TourPage = () => {
    const handler = useData('tour');

    return (
        <FirstFlex>
            <SelectedAnnounce> 볼거리를 선택해주셨네요! </SelectedAnnounce>
            <ChooseKindAnnounce> 어떤 카테고리가 마음에 드세요? </ChooseKindAnnounce>
            <TourListBox tourData={handler.data}
                handleChangeTour={handler.handleChangeItem}
            />
            <InfoBox selectedTour={handler.selectedData}
                hideOverlay={handler.hideOverlay}
                overlay={handler.overlay}
                animate={handler.animate} />
        </FirstFlex>
    );
};

export default TourPage;

const FirstFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
