import React, {useContext} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FaChartPie, FaPiggyBank, FaFile, FaBell, FaChartBar, FaRegSun} from 'react-icons/fa';
import {ThemeContext} from '../../../context/themeContext';

const NavMenuContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding: 0;
    z-index: 1000;
`;

const StyledNavLink = styled(NavLink)`
    z-index: 1000;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 0.5rem;
    transition: ${({theme}) => theme.transitionBasic};

    &.${props => props.activeClassName} {
        background-color: rgba(255, 255, 255, 0.3);
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

const NavIcon = styled.span`
    margin: 1rem;
    color: ${props => !props.active && props.theme.primaryBackground};
    font-size: 1.2rem;
`;

const NavTitle = styled.h1`
    margin: 0 1rem;
    font-size: 0.8rem;
    font-weight: 300;
    text-transform: uppercase;
    color: ${props => props.theme.primaryBackground};
`;

const navLinks = [
    {title: 'Summary', route: '/summary', icon: <FaChartPie />},
    {title: 'Funds', route: '/funds', icon: <FaPiggyBank />},
    {title: 'Reports', route: '/reports', icon: <FaFile />},
    {title: 'Alerts', route: '/alerts', icon: <FaBell />},
    {title: 'Stats', route: '/stats', icon: <FaChartBar />},
    {title: 'Settings', route: '/settings', icon: <FaRegSun />}
];

const NavMenu = () => {
    const {sidebarExpanded, sidebarHovered} = useContext(ThemeContext);

    return (
        <NavMenuContainer>
            {navLinks.map((navLink, index) => (
                <StyledNavLink to={navLink.route} exact activeClassName='active' key={index}>
                    <NavIcon>{navLink.icon}</NavIcon>
                    <NavTitle
                        style={
                            sidebarExpanded || sidebarHovered
                                ? {display: 'block'}
                                : {display: 'none'}
                        }
                    >
                        {navLink.title}
                    </NavTitle>
                </StyledNavLink>
            ))}
        </NavMenuContainer>
    );
};

export default NavMenu;
