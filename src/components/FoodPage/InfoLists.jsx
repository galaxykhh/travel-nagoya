import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../pubcomp/ScreenViewer';

const Wrap = styled.div`
  display: ${props => props.hidden};
  width: 1200px;
`;

const InfoLists = ({list, hidden}) => {
  const { food, memo } = list;

  return (
    <Wrap hidden={hidden} >
      <ScreenViewer>
        <div style={{fontSize: '30px', marginTop: '40px'}} > {food} </div>
        <div style={{fontSize: '20px', marginTop: '50px'}}> {memo}  </div>
      </ScreenViewer>
    </Wrap>
  );
}

export default InfoLists;