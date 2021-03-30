import React from 'react';
import styled from 'styled-components'

const DIV = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  margin-top: 1400px;
  background-color: #e4e7ec;
  opacity: 1;
  width: 1200px;
  height: 2000px;
  animation: ${props => props.animate} 0.8s ease forwards;
  transition: 1s;
`;

const FLEX = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const stopProp = (e) => {
    e.stopPropagation();
}

function ScreenViewer({ children, animate }) {

    return (
        <DIV onClick={stopProp} animate={animate} >
            <FLEX>
                {children}
            </FLEX>
        </DIV>
    );
}

export default ScreenViewer;