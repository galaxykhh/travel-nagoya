import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeUp = keyframes`
  from {
    opacity: 0;
    padding-top: 65px;
  }
  to {
    opacity: 1;
    padding-top: 0px;
  }
`;

const H1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
  color: black;
  font-size: 50px;
  animation: ${FadeUp} .8s ease;
`;

function SelectedMent({children}) {
  return (
    <H1> {children} </H1>
  );
}

export default SelectedMent;