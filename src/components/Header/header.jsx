import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './NavItem';

const LogoIcon = '/Image/icon.png';

const navList = [
    {
        id: 1,
        to: '/food',
        children: '먹거리',
    },
    {
        id: 2,
        to: '/tourism',
        children: '볼거리',
    },
    {
        id: 3,
        to: '/shopping',
        children: '쇼핑',
    },
];

const Header = () => {
    return (
        <>
            <Bar>
                <Logo />
                {navList.map(item => (
                    <NavItem item={item} key={item.id} />
                ))}
            </Bar>
        </>
    );
};

export default Header;

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

const Bar = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #3f4040;
    text-decoration: none;
    z-index: 1;
`;

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