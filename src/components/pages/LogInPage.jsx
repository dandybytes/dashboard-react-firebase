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

const LogInPage = ({history}) => {
    const handleLogIn = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                window.alert(error);
            }
        },
        [history]
    );

    return (
        <PageWrapper>
            <AuthForm handleSubmit={handleLogIn} isLoginForm={true} />
        </PageWrapper>
    );
};

export default withRouter(LogInPage);
