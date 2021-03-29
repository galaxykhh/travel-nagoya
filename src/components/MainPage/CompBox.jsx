import React from 'react';
import styled from 'styled-components';
import Wallpaper from './Wallpaper'
import Subtitle from './Subtitle'

function CompBox() {
  return (
    <div>
      <Wallpaper />
      <FlexDIV column >
      <Subtitle />
      </FlexDIV>
    </div>
  );
}

const FlexDIV = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
`;

export default CompBox;