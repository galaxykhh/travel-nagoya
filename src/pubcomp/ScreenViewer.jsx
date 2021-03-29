import React from 'react';
import styled, {keyframes} from 'styled-components'

const FadeUp = keyframes`
  from {
    opacity: 0;
    margin-top: 600px;
  }
  to {
    opacity: 1;
    padding-top: 0px;
  }
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 60px;
  margin-top: 100px;
  background-color: #FADAD8;
  opacity: 1;
  width: 1200px;
  height: 300px;
  animation: ${FadeUp} 1s ease forwards;
`;

function ScreenViewer({ children }) {

  return (
    <DIV>
        {children}
    </DIV>
  );
}

export default ScreenViewer;