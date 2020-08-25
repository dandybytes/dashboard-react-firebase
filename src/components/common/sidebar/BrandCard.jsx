import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../../context/themeContext';

const BrandContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.primaryBackground};
    padding: 4rem 0;
    display: flex;
    align-items: center;
`;

const BrandTitle = styled.h1`
    margin-right: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    color: ${({theme}) => theme.textColor};
`;

const BrandLogo = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.25rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.primaryBackground};

    & img {
        width: 1.5rem;
    }
`;

const BrandCard = () => {
    const {sidebarExpanded, sidebarHovered} = useContext(ThemeContext);

    return (
        <BrandContainer>
            <BrandLogo>
                <img src={require('../../../assets/ngt-logo.png')} />
            </BrandLogo>
            <BrandTitle
                style={sidebarExpanded || sidebarHovered ? {display: 'block'} : {display: 'none'}}
            >
                NextGateTech
            </BrandTitle>
        </BrandContainer>
    );
};

export default BrandCard;
