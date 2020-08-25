import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../../../context/themeContext';

const ProfileContainer = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem 0 1rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.contrastBackground};
    cursor: pointer;

    & img {
        width: 1.5rem;
    }

    &:after {
        content: '';
        position: absolute;
        right: -0.9rem;
        border-top: 5px solid white;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }
`;

const ProfileBubble = () => {
    const {profileMenuVisible, setProfileMenuVisible} = useContext(ThemeContext);

    return (
        <ProfileContainer onClick={() => setProfileMenuVisible(!profileMenuVisible)}>
            <img src={require('../../../../assets/ngt-logo.png')} />
        </ProfileContainer>
    );
};

export default ProfileBubble;
