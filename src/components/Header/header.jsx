import React, { useContext } from 'react';
import styled from 'styled-components';
import { authContext } from '../../context/authContext';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Logo from './Logo';
import NavItem from './NavItem';

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
    const store = useContext(authContext);
    return (
        <>
            <Bar>
                <Logo />
                {navList.map(item => (
                    <NavItem item={item} key={item.id} />
                ))}
                {store.user ?
                    <LogoutButton /> :
                    <LoginButton />
                }
            </Bar>
        </>
    );
};

export default Header;

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