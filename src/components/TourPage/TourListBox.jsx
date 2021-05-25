import React from 'react';
import styled from 'styled-components';
import { fadeUp } from '../../style/keyframes';
import TourLists from './TourLists';

const tourData = [
    {
        id: 1,
        path: 'https://t1.daumcdn.net/cfile/tistory/1416D64B5040016F02',
        category: '문화재 또는 근교 소도시',
    },
    {
        id: 2,
        path: 'https://d2ahiw9kb7is19.cloudfront.net/-/media/21A950030DDB469BA2705F70C8215C67.jpg?d=20171117T111414&w=750',
        category: '번화가 또는 랜드마크',
    },
];

const TourListBox = ({ handleChangeTour }) => {
    return (
        <FlexBox>
            {tourData.map((list, index) => (
                <TourLists list={list}
                    key={list.id}
                    handleChangeTour={() => handleChangeTour(index)}
                />
            ))}
        </FlexBox>
    );
};

export default TourListBox;

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 300px;
    opacity: 0;
    animation: ${fadeUp} 1s ease forwards;
    animation-delay: 1s;
`;