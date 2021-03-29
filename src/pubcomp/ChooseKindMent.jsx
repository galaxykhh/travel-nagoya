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
  margin-top: 130px;
  color: black;
  font-size: 35px;
  opacity: 0;
  animation: ${FadeUp} .8s ease forwards;
  animation-delay: 1.3s;
`;

function ChooseKindMent({children}) {
  return (
    <H1> {children} </H1>
  );
}

export default ChooseKindMent;