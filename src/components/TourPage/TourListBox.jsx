import React from 'react';
import styled from 'styled-components';
import { fadeUp } from '../../style/keyframes';
import TourLists from './TourLists';

const TourListBox = ({ tourData, handleChangeTour }) => {
  return (
      <FLEX>
          {tourData.map(list => (
              <TourLists list={list}
                  key={list.id}
                  handleChangeTour={handleChangeTour}
              />
          ))}
      </FLEX>
  );
};

export default TourListBox;

const FLEX = styled.div`
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