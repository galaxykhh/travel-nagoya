import React, { useState, useContext, useEffect } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import AccountViewer from '../pubcomp/AccountViewer';
import HeadShake from 'react-reveal/HeadShake';
import styled from 'styled-components';
import axios from 'axios';
import { slideDown } from '../pubcomp/slideAnimation'
import { authContext } from '../App';
const SERVER = 'http://localhost:8000/userinfo';

const Div = styled.div`
    font-family: Chango;
    font-size: 55px;
    font-weight: bolder;
    letter-spacing: 3px;
    animation: ${slideDown} 1s ease forwards;
    margin-bottom: 20px;
`;

const Input = styled.input.attrs(props => ({
    placeholder: props.placeholder,
    type: props.type
}))`
    all: unset;
    border: 1px solid #b8b5b5; border-radius: 4px;
    width: 400px;
    height: 50px;
    padding-left: 15px;
    margin-bottom: 12px;
    margin-top: 12px;
    &:focus {
        border-color: #d37373;
    }
`;

const LoginBtn = styled.button`
    border: 1px solid #b8b5b5; border-radius: 4px;
    background-color: #cc5353;
    font-size: 17px;
    font-weight: bold;
    color: white;
    width: 417px;
    height: 55px;
    cursor: pointer;
    margin-top: 12px;
    margin-bottom: 30px;
`;

const MakeAccountBtn = styled(LoginBtn)`
    margin-top: 30px;
    background-color: #5f83cf;
`;

const LoginPage = () => {
    const store = useContext(authContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkLogin, setCheckLogin] = useState('');
    const [spy, setSpy] = useState(false);
    const getIDValue = (e) => {
        setEmail(e.target.value);
    }

    const getPWValue = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        console.log(store.user)
    }, [store.user]);

    const signin = async (email, password) => {
        const response = await axios.get(SERVER)
        if (!response) {
            return;
        }
        const userData = response.data;

        const tryUser = userData.find((userData) => userData.email === email && userData.password === password)
        if (tryUser === undefined) {
            setCheckLogin('회원 정보가 일치하지 않습니다')
            setEmail('');
            setPassword('');
            setSpy(!spy);
        } else {
            alert(`${tryUser.name} 여행자님, 반갑습니다!`)
            store.setUser(tryUser);
            history.push('/');
        }
    }

    const pressEnterHandle = (e) => {
        if (e.key === 'Enter') {
            signin(email, password);
        }
    }

    return (
        <AccountViewer>
            <Div> Travel </Div>
            <Div> NAGOYA </Div>
            <Div />
            <Input placeholder='이메일'
                defaultValue={email}
                onChange={getIDValue}
                type='text'
            />

            <Input placeholder='비밀번호'
                defaultValue={password}
                onChange={getPWValue}
                onKeyPress={pressEnterHandle}
                type='password'
            />

            <LoginBtn onClick={() => signin(email, password)}>
                로그인
            </LoginBtn>
            <HeadShake spy={spy} >
                <div style={{ color: 'red' }} >{checkLogin}</div>
            </HeadShake>
            <div style={{ color: '#4a4d4c', marginTop: '20px' }} > 아직 회원이 아니신가요? </div>
            <NavLink to='makeaccount'>
                <MakeAccountBtn> 회원가입 </MakeAccountBtn>
            </NavLink>
        </AccountViewer>
    )
}

export default LoginPage;