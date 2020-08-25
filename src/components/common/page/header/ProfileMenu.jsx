import React, {useContext, useCallback} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ThemeContext} from '../../../../context/themeContext';
import firebase from '../../../../firebase/firebase';

const ProfileMenuContainer = styled.ul`
    position: absolute;
    top: 3rem;
    right: 2rem;
    padding: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    border-radius: 3px;
    background-color: ${({theme}) => theme.primaryAccentRegular};
    color: ${({theme}) => theme.primaryBackground};
    list-style: none;

    &:after {
        content: '';
        position: absolute;
        top: -5px;
        right: 1.5rem;
        border-bottom: 5px solid ${({theme}) => theme.primaryAccentRegular};
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }
`;

const ProfileMenuItem = styled.li`
    line-height: 1.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;

    &:last-child {
        border-top: 1px solid ${({theme}) => theme.primaryAccentLight};
    }

    & a:link,
    & a:visited {
        color: ${({theme}) => theme.primaryBackground};
    }

    & a:hover {
        color: white;
    }
`;

const ProfileMenuButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0.5rem 0 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${({theme}) => theme.primaryBackground};
    cursor: pointer;

    &:hover {
        color: white;
    }
`;

const ProfileMenu = ({history}) => {
    const {profileMenuVisible} = useContext(ThemeContext);

    const handleSignOut = useCallback(async () => {
        try {
            await firebase.auth().signOut();
            history.push('/login');
        } catch (error) {
            console.error(error);
        }
    }, [history]);

    return (
        <ProfileMenuContainer style={profileMenuVisible ? {display: 'block'} : {display: 'none'}}>
            <ProfileMenuItem>
                <Link to='/profile'>Profile</Link>
            </ProfileMenuItem>
            <ProfileMenuItem>
                <Link to='/settings'>Settings</Link>
            </ProfileMenuItem>
            <ProfileMenuItem>
                <ProfileMenuButton onClick={handleSignOut}>Log Out</ProfileMenuButton>
            </ProfileMenuItem>
        </ProfileMenuContainer>
    );
};

export default withRouter(ProfileMenu);
