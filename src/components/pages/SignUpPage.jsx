import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import firebase from '../../firebase/firebase';

import AuthForm from '../common/forms/AuthForm';

const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpPage = ({history}) => {
    const handleSignUp = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                window.alert(error);
            }
        },
        [history]
    );

    return (
        <PageWrapper>
            <AuthForm handleSubmit={handleSignUp} isLoginForm={false} />
        </PageWrapper>
    );
};

export default withRouter(SignUpPage);
