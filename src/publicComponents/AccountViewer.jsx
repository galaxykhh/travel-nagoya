import React from 'react';
import styled from 'styled-components';

const AccountViewer = ({children}) => {
    return (
        <FlexBox> {children} </FlexBox>
    );
};

export default AccountViewer;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
`;