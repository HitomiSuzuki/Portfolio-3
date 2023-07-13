import React, {useState} from "react";
import styled from "styled-components";
import {useLogin, useLogout} from '../../queries/AuthQuery';

export const Login = () => {
    const login = useLogin();
    const logout = useLogout();
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('Passw0rd');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login.mutate({email, password})
    }

    return (
        <StyledLoginWrapper onSubmit={(handleLogin)}>
            <StyledInputLabel>username</StyledInputLabel>
            <StyledInput 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             />
            <StyledInputLabel>password</StyledInputLabel>
            <StyledInput 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             />
            <StyledButton type='submit'>login</StyledButton>
            <StyledButton type='button' onClick={() => logout.mutate()}>login</StyledButton>
        </StyledLoginWrapper>
    )
}

const StyledLoginWrapper = styled.form`
    width: 440px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`

const StyledInputLabel = styled.label`
    display: block;
    &:nth-of-type(2) {
        margin-top: 66px;
    }

`

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 37px;
    margin-top: 12px;
    border: none;
    background: lightGray;
    &:focus {
        background: white;
        border: 1px solid black;
    }
`

const StyledButton = styled.button`
    display: block;
    margin: 90px auto 0;
    padding: 9px 44px;
    border: none;
    background: lightGray;
    
`