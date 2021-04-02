import React, { useState, useContext, useEffect } from "react"
import {useHistory} from 'react-router-dom';
import AccountViewer from '../pubcomp/AccountViewer';
import styled from 'styled-components';
import axios from 'axios';
import { slideUp } from '../pubcomp/slideAnimation'
import { authContext } from '../App';

const Div = styled.div`
    font-family: Chango;
    font-size: 55px;
    font-weight: bolder;
    letter-spacing: 3px;
    animation: ${slideUp} .8s ease;
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
    &:focus {
        border-color: #d37373;
    }
`;

const LoginBtn = styled.button`
    border: 1px solid #b8b5b5; border-radius: 4px;
    background-color: #cf4b4b;
    font-size: 17px;
    font-weight: bold;
    color: white;
    width: 417px;
    height: 55px;
    cursor: pointer;
    margin-bottom: 30px;
`;

const MakeAccountBtn = styled(LoginBtn)`
    margin-top: 30px;
    background-color: #2EC4B6;
`;

const LoginPage = () => {
    const store = useContext(authContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getIDValue = (e) => {
        setEmail(e.target.value);
    }
    
    const getPWValue = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        console.log(store.user)
    }, [store.user]);

    const signin = async ({email, password}) => {
        const response = await axios.get('http://localhost:8000/userinfo')
        if (!response) {
            return;
        }
        const userData = (response.data);

        const tryUser = userData.find((userData) => userData.email === email && userData.password === password )
        if (tryUser === undefined) {
            alert('이메일이나 비밀번호가 잘못되었습니다')
            setEmail('');
            setPassword('');
        } else {
            alert(`${tryUser.name} 여행자님, 반갑습니다!`)
            store.setUser(tryUser);
            history.push('/');
        }
    }

    return (
        <AccountViewer>
            <Div> Travel </Div>
            <Div> NAGOYA </Div>
            <Div/>
            <Input placeholder='이메일'
                   value={email}
                   onChange={getIDValue}
                   type= 'text'
            />

            <Input placeholder='비밀번호'
                   value={password}
                   onChange={getPWValue}
                   type='password'
            />

            <LoginBtn onClick={() => signin({email, password})}>
                로그인
            </LoginBtn>

            <div style={{color: '#4a4d4c'}} > 아직 회원이 아니신가요? </div>

            <MakeAccountBtn> 회원가입 </MakeAccountBtn>
        </AccountViewer>
    )
}

export default LoginPage;