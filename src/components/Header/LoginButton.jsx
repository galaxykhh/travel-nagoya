import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LoginButton = () => {
    return (
        <ButtonBox>
            <Button to='/login'> 로그인 </Button>
        </ButtonBox>
    );
};

export default LoginButton;

const Button = styled(NavLink)`
    padding-right: 7px;
    padding-left: 7px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-left: 13px;
    text-decoration: none;
    border: 1px solid #f4f7f7; border-radius: 10px;
    font-size: 14px;
    color: #f4f7f7;
    cursor: pointer;
    opacity: 0.8;
    transition: .5s ease;
    &:hover {
        color: black;
        opacity: 1;
        background-color: #f4f7f7;
    }
`;

const ButtonBox = styled.div`
    position: fixed;
    top: 12px;
    right: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;