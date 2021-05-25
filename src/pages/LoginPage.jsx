import React, { useState, useContext, useEffect } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import AccountViewer from '../publicComponents/AccountViewer';
import styled from 'styled-components';
import { fadeSlideLeft } from "../style/keyframes";
import { useForm } from "react-hook-form";
import authRepository from "../repository/authRepository";
import { authContext } from "../context/authContext";

const LoginPage = () => {
    const store = useContext(authContext);
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const { data: { message, userData } } = await authRepository.signIn(data);
            if (message === 'success' && userData) {
                store.setUser(userData);
                alert(`${userData.name} 여행자님, 반갑습니다`);
                history.push('/');
            } else if (message === 'invalid' && !userData) {
                alert('회원정보가 일치하지 않습니다');
            };
        } catch(err) {
            console.log(err);
            alert('서버에 오류가 있습니다');
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <AccountViewer>
                <Div> Travel </Div>
                <Div> NAGOYA </Div>
                <InputBox>
                    <Input placeholder='이메일'
                        type='text'
                        {...register('email', {
                            required: '이메일을 입력해주세요'
                        })}
                    />
                    {errors.email && <ErrorMsg> {errors.email.message} </ErrorMsg>}
                </InputBox>
                <InputBox>
                    <Input placeholder='비밀번호'
                        autoComplete='off'
                        type='password'
                        {...register('password', {
                            required: '비밀번호를 입력해주세요'
                        })}
                    />
                    {errors.password && <ErrorMsg> {errors.password.message} </ErrorMsg>}
                </InputBox>
                <LoginBtn type='submit' >
                    로그인
                </LoginBtn>
                <div style={{ color: '#4a4d4c', marginTop: '20px' }} > 아직 회원이 아니신가요? </div>
                <NavLink to='makeaccount'>
                    <MakeAccountBtn> 회원가입 </MakeAccountBtn>
                </NavLink>
            </AccountViewer>
        </form>
    );
};

export default LoginPage;

const Div = styled.div`
    font-family: Chango;
    font-size: 55px;
    font-weight: bolder;
    letter-spacing: 3px;
    animation: ${fadeSlideLeft} 1s ease forwards;
    margin-bottom: 20px;
`;

const InputBox = styled.div`
    position: relative;
    width: 420px;
    height: 70px;
    margin-bottom: 12px;
    margin-top: 12px;
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

const ErrorMsg = styled.div`
    width: 420px;
    position: absolute;
    text-align: center;
    bottom: -10px;
    color: red;
`;