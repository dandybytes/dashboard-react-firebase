import React, {useContext} from 'react';
import styled, {withTheme} from 'styled-components';

import {ThemeContext} from '../../../context/themeContext';

import Header from './header/Header';
import MenuButton from '../menu/MenuButton';
import SideBar from '../sidebar/SideBar';
import Main from './Main';

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding-top: ${({theme}) => theme.headerHeight};
    padding-bottom: 0;
    z-index: 0;
    transition: ${({theme}) => theme.transitionBasic};
`;

const PageContainer = ({children, theme}) => {
    const {sidebarExpanded, sidebarHovered} = useContext(ThemeContext);

    return (
        <PageWrapper
            style={
                sidebarExpanded || sidebarHovered
                    ? {paddingLeft: theme.expandedSideBarWidth}
                    : {paddingLeft: theme.collapsedSideBarWidth}
            }
        >
            <Header />
            <MenuButton />
            <SideBar />
            <Main>{children}</Main>
        </PageWrapper>
    );
};

export default withTheme(PageContainer);
