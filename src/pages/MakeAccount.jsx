import React, { useEffect, useState } from 'react';
import AccountViewer from '../publicComponents/AccountViewer';
import styled from 'styled-components';
import axios from 'axios';
import HeadShake from 'react-reveal/HeadShake';
import { useHistory } from 'react-router';
import { fadeSlideLeft } from '../style/keyframes';
const SERVER = 'http://localhost:8000/userinfo';
const ACSERVER = 'http://localhost:8000/setupaccount';

const MakeAccount = () => {
    const [userData, setUserData] = useState(null);
    const [checkAccount, setCheckAccount] = useState('');
    const [checkPW, setCheckPW] = useState('');
    const [accountColor, setAccountColor] = useState('black');
    const [name, setName] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordColor, setPasswordColor] = useState('black');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [spyAccount, setSpyAccount] = useState(false);
    const [accountState, setAccountState] = useState(false);
    const [passwordState, setPasswordState] = useState(false);
    const history = useHistory();

    const getAccountValue = (e) => {
        setAccount(e.target.value);
    };

    const getNameValue = (e) => {
        setName(e.target.value);
    };

    const getPWValue = (e) => {
        setPassword(e.target.value);
    };

    const isSamePassword = (e) => {
        setPasswordCheck(e.target.value);
    };

    useEffect(() => {
        if (passwordCheck.length >= 1) {
            if (passwordCheck === password) {
                setPasswordColor('#6AAFE6');
                setCheckPW('비밀번호가 일치합니다');
                setPasswordState(true)
            } else {
                setPasswordColor('red');
                setCheckPW('비밀번호가 일치하지 않습니다');
                setPasswordState(false);
            };
        };
    }, [passwordCheck, password]);

    const getUserData = async () => {
        const response = await axios.get(SERVER);
        if (!response) {
            return;
        };
        setUserData(response.data);
    };

    useEffect(() => {
        getUserData();
    }, []);

    const isAvailableAccount = (account) => {
        if (userData === null) {
            setCheckAccount('현재 서버가 닫혀있습니다. 잠시 후 시도해주세요');
            return
        }
        else {
            const TryAccount = userData.find(data => data.email === account);
            if (account.length >= 12) {
                setAccountColor('red');
                setCheckAccount('아이디는 12자 미만으로 만들어주세요');
                setSpyAccount(!spyAccount);
                setAccountState(false);
            } else if (account === '') {
                setAccountColor('red');
                setCheckAccount('아이디를 입력해주세요');
                setSpyAccount(!spyAccount);
                setAccountState(false);
            } else if (TryAccount === undefined) {
                setAccountColor('#6AAFE6');
                setCheckAccount('사용가능한 계정입니다');
                setAccountState(true);
            } else {
                setAccountColor('red');
                setCheckAccount('다른 여행자가 사용중인 계정입니다');
                setSpyAccount(!spyAccount);
                setAccountState(false);
            }
        }
    }

    const availableAccountHandle = (e) => {
        if (e.key === 'Enter') {
            isAvailableAccount(account);
        };
    };

    const availablePasswordHandle = (e) => {
        if (e.key === 'Enter') {
            console.log('entered');
        }
    }

    const setUp = () => {
        if (accountState === true && passwordState === true) {
            const data = {
                email: account,
                password: password,
                name: name,
            };
            axios.post(ACSERVER, data);
            alert('회원가입이 완료되었습니다!');
            history.push('/login');
        } else {
            alert('입력 정보를 다시 확인해주세요');
}
    };

return (
    <>
        <AccountViewer>
            <Div> 새로운 여행자가 되어보세요! </Div>
            <Input placeholder='이름'
                type='text'
                defaultValue={name}
                onChange={getNameValue}
            />
            <Input placeholder='아이디'
                onChange={getAccountValue}
                onKeyPress={availableAccountHandle}
                type='text'
                defaultValue={account}
            />
            <HeadShake spy={spyAccount}>
                <AlertMail color={accountColor} > {checkAccount} </AlertMail>
            </HeadShake>
            <IsAlreadyBtn onClick={() => isAvailableAccount(account)}> 이메일 중복확인 </IsAlreadyBtn>
            <Input placeholder='비밀번호'
                defaultValue={password}
                onChange={getPWValue}
                onKeyPress={availablePasswordHandle}
                type='password'
            />
            <Input placeholder='비밀번호 확인'
                defaultValue={passwordCheck}
                onChange={isSamePassword}
                type='password'
            />
            <AlertPassword color={passwordColor} > {checkPW} </AlertPassword>
            <MakeBtn onClick={setUp} > 가입하기 </MakeBtn>
        </AccountViewer>
    </>


)
}

const AlertMail = styled.div`
    color: ${props => props.color};
`;

const AlertPassword = styled(AlertMail)``;

const Div = styled.div`
font-size: 55px;
font-weight: 550;
letter-spacing: 3px;
animation: ${fadeSlideLeft} 1s ease forwards;
margin-bottom: 40px;
`;

const IsAlreadyBtn = styled.button`
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

const MakeBtn = styled(IsAlreadyBtn)`
    background-color: #5f83cf;
`;

export default MakeAccount;