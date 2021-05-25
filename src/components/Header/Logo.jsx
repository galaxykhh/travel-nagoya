import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../../config';

const Logo = () => (
    <>
        <LogoImg />
        <LogoLink>
            <LogoTextBox>
                <Trav> Travel </Trav>
                <Nago> NAGOYA </Nago>
            </LogoTextBox>
        </LogoLink>
    </>
);

export default Logo;

const Trav = styled.div`
    font-size: 20px;
    letter-spacing: 4px;
`;

const Nago = styled.div`
    font-size: 19px;
    letter-spacing: 1px;
`;

const LogoImg = styled.img.attrs({
    src: LogoIcon,
    alt: 'logo'
})`
    position: absolute;
    top: 4px;
    left: 25px;
    width: 50px;
    height: 45px;
`;

const LogoLink = styled(NavLink).attrs({
    to: '/',
})`
    text-decoration: none;
    color: #f4f7f7;
    font-weight: bolder;
    font-family: 'Chango';
`;

const LogoTextBox = styled.div`
    position: absolute;
    top: 4px;
    left: 85px;
    height: 50px;
    width: 100px;
`;