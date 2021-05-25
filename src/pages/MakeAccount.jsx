import React, { useEffect, useState } from 'react';
import AccountViewer from '../publicComponents/AccountViewer';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { fadeSlideRight } from '../style/keyframes';
import authRepository from '../repository/authRepository';
import { useForm } from 'react-hook-form';

const MakeAccount = () => {
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
    const [isChecked, setIsChecked] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsChecked(false);
    }, [watch('account')]);

    const onSubmit = async (data) => {
        if (isChecked === false) {
            setError('account', { type: 'notChecked' });
            return;
        };
        try {
            const { data: { message } } = await authRepository.signUp(data);
            if (message === 'success') {
                alert('회원가입이 완료되었습니다!');
                history.push('/login');
            };
        } catch(err) {
            alert('서버 오류입니다');
        };
    };

    const checkAccount = async (account) => {
        const { data: { message } } = await authRepository.checkAccount(account);
        if (message === 'already exist') {
            setError('account', { type: 'duplicated' });
            return;
        }
        if (message === 'not exist') {
            setError('account', { type: 'notExist' });
            setIsChecked(true);
            return;
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <AccountViewer>
                <Div> 새로운 여행자가 되어보세요! </Div>
                <InputBox>
                    <Input placeholder='이름'
                        type='text'
                        {...register('name', {
                            required: '이름을 입력해주세요',
                        })}
                    />
                    {errors.name && <ErrorMsg> {errors.name.message} </ErrorMsg>}
                </InputBox>
                <InputBox>
                    <Input placeholder='아이디'
                        type='text'
                        {...register('account', {
                            required: '아이디를 입력해주세요',
                        })}
                    />
                    {errors.account && errors.account.type === 'required' && <ErrorMsg> {errors.account.message} </ErrorMsg>}
                    {errors.account &&  errors.account.type === 'duplicated' && <ErrorMsg> 이미 사용중인 아이디입니다 </ErrorMsg>}
                    {errors.account && errors.account.type === 'notChecked' && <ErrorMsg> 아이디 중복 확인을 해주세요 </ErrorMsg>}
                    {errors.account && errors.account.type === 'notExist' && <CheckMsg> 사용 가능한 아이디입니다 </CheckMsg>}
                </InputBox>
                <CheckButton onClick={() => checkAccount(watch('account'))} > 아이디 중복확인 </CheckButton>
                <InputBox>
                    <Input placeholder='비밀번호'
                        type='password'
                        {...register('password', {
                            required: '비밀번호를 입력해주세요',
                        })}
                    />
                    {errors.password && <ErrorMsg> {errors.password.message} </ErrorMsg>}
                </InputBox>
                <InputBox>
                    <Input placeholder='비밀번호 확인'
                        type='password'
                        {...register('pwcheck', {
                            required: '비밀번호를 입력해주세요',
                            validate: pwcheck => pwcheck === watch('password'),
                        })}
                    />
                    {errors.pwcheck && errors.pwcheck.type === 'required' && <ErrorMsg> {errors.pwcheck.message} </ErrorMsg>}
                    {errors.pwcheck && errors.pwcheck.type === 'validate' && <ErrorMsg> 비밀번호가 일치하지 않습니다 </ErrorMsg>}
                </InputBox>
                <SubmitButton type='submit' > 가입하기 </SubmitButton>
            </AccountViewer>
        </form>
    );
};

const Div = styled.div`
font-size: 55px;
font-weight: 550;
letter-spacing: 3px;
animation: ${fadeSlideRight} 1s ease forwards;
margin-bottom: 40px;
`;

const CheckButton = styled.button`
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

const ErrorMsg = styled.div`
    width: 420px;
    position: absolute;
    text-align: center;
    bottom: -10px;
    color: red;
`;

const CheckMsg = styled(ErrorMsg)`
    color: green;
`;

const SubmitButton = styled(CheckButton)`
    background-color: #5f83cf;
`;

export default MakeAccount;