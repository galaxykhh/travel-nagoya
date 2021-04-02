import React from 'react';
import styled from 'styled-components';

const FLEX = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 230px;
`;

const AccountViewer = ({children}) => {
    return (
        <FLEX> {children} </FLEX>
    )
}

export default AccountViewer