import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
    max-width: 80vw;
    width: 30rem;
    margin: 0 auto;
    padding: 5rem;
    border: 0.25vmin solid ${({theme}) => theme.primaryAccentRegular};
    opacity: 0.8;
`;

const FormHeadline = styled.h1`
    margin: 0 0 1rem;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    opacity: 0.7;
`;

const FormBody = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1vmin;
`;

const FormInput = styled.input`
    width: 100%;
    margin: 1.5vmin 0;
    padding: 1vmin 2vmin;
    background-color: transparent;
    border: 0.2vmin solid ${({theme}) => theme.primaryAccentRegular};
    color: white;

    &::placeholder {
        color: ${({theme}) => theme.primaryAccentRegular};
        font-size: 0.75rem;
        opacity: 0.7;
    }

    &:focus {
        outline: none;
        border: 0.2vmin solid ${({theme}) => theme.secondaryAccentRegular};
        box-shadow: 0 0 1vmin ${({theme}) => theme.secondaryAccentRegular};
    }
`;

const SubmitButton = styled.button`
    margin: 3vmin 0 0;
    padding: 1rem 2rem;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    background-color: ${({theme}) => theme.primaryAccentRegular};
    color: white;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${({theme}) => theme.secondaryAccentRegular};
        box-shadow: ${({theme}) => theme.boxGlow};
    }
`;

const FormFooter = styled.p`
    padding: 0.5rem;
    text-align: center;

    & a {
        color: ${({theme}) => theme.secondaryAccentRegular};
    }
`;

const AuthForm = ({handleSubmit, isLoginForm}) => {
    return (
        <FormContainer>
            <FormHeadline>{isLoginForm ? 'Log In' : 'Sign Up'}</FormHeadline>
            <FormBody onSubmit={handleSubmit}>
                {/* <label> */}
                {/* Email */}
                <FormInput name='email' type='email' placeholder='email' />
                {/* </label> */}
                {/* <label> */}
                {/* Password */}
                <FormInput name='password' type='password' placeholder='password' />
                {/* </label> */}
                <SubmitButton type='submit'>{isLoginForm ? 'Log In' : 'Sign Up'}</SubmitButton>
            </FormBody>
            {isLoginForm ? (
                <FormFooter>
                    Don't have an account yet? <Link to={'/signup'}>Sign Up</Link>
                </FormFooter>
            ) : (
                <FormFooter>
                    Already have an account? <Link to={'/login'}>Log In</Link>
                </FormFooter>
            )}
        </FormContainer>
    );
};

export default AuthForm;
