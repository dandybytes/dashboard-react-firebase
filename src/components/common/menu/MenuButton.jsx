import React, {useContext} from 'react';
import styled from 'styled-components';
import {MdMenu, MdClose} from 'react-icons/md';
import {ThemeContext} from '../../../context/themeContext';

const MenuButtonContainer = styled.div`
    position: fixed;
    top: 1rem;
    left: 2.5rem;
    color: ${({theme}) => theme.primaryAccentRegular};
    font-size: 2rem;
    cursor: pointer;
`;

const MenuButton = () => {
    const {sidebarExpanded, setSidebarExpanded} = useContext(ThemeContext);

    return (
        <MenuButtonContainer onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            {sidebarExpanded ? <MdClose /> : <MdMenu />}
        </MenuButtonContainer>
    );
};

export default MenuButton;
