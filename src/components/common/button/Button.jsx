import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
    width: 9rem;
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
    padding: 0.7rem;
    border-radius: 5rem;
    background-image: ${({theme}) => theme.highlightGradient01};
    color: #fff;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 700;
    cursor: pointer;
    transition: ${({theme}) => theme.transitionBasic};

    &:hover {
        box-shadow: ${({theme}) => theme.boxGlow};
        /* background-image: ${({theme}) => theme.highlightGradient02}; */
    }
`;

const Button = ({text, link = '/'}) => {
    return <LinkButton to={link}>{text}</LinkButton>;
};

export default Button;
