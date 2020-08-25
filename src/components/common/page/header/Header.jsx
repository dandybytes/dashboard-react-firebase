import React from 'react';
import styled from 'styled-components';

import ProfileBubble from './ProfileBubble';
import ProfileMenu from './ProfileMenu';
import UserStatus from './UserStatus';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: ${({theme}) => theme.headerHeight};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* margin-bottom: 2rem; */
    padding: 1rem;
    background-color: ${({theme}) => theme.primaryBackground};
    background-color: transparent;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <UserStatus />
            <ProfileBubble />
            <ProfileMenu />
        </HeaderContainer>
    );
};

export default Header;
