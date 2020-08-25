import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../../context/themeContext';

import BrandCard from './BrandCard';
import NavMenu from './NavMenu';

const SideBarContainer = styled.aside`
    position: fixed;
    top: ${({theme}) => theme.headerHeight};
    bottom: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background-color: ${({theme}) => theme.primaryAccentRegular};
    color: white;
    box-shadow: ${({theme}) => theme.boxShadow};
    z-index: 1000;
    transition: ${({theme}) => theme.transitionBasic};

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 40px;
        transform: translate(-50%);
        border-bottom: 5px solid #42b883;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom-color: ${({theme}) => theme.primaryAccentRegular};
    }
`;

const SideBar = () => {
    const {setSidebarHovered} = useContext(ThemeContext);

    return (
        <SideBarContainer
            onMouseEnter={() => setSidebarHovered(true)}
            onMouseLeave={() => setSidebarHovered(false)}
        >
            <BrandCard />
            <NavMenu />
        </SideBarContainer>
    );
};

export default SideBar;
