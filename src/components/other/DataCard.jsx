import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaPiggyBank, FaMoneyBillWave, FaRegChartBar, FaBell} from 'react-icons/fa';
import {numberToHumanReadableString} from '../../helpers/formatting';

const icons = {
    funds: <FaMoneyBillWave />,
    subfunds: <FaPiggyBank />,
    reports: <FaRegChartBar />,
    alerts: <FaBell />
};

const CardContainer = styled.article`
    margin: 0;
    background-color: ${({theme}) => theme.primaryBackgroundLighter};
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    /* box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 0.14), 0px 1px 3px 0px rgba(255, 255, 255, 0.12); */
    box-shadow: ${({theme}) => theme.boxShadow};
`;

const CardIcon = styled(Link)`
    justify-self: left;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    background-color: ${({theme}) => theme.secondaryAccentRegular};
    color: white;
    border-radius: 50%;
    font-size: 1rem;

    &:hover {
        background-color: ${({theme}) => theme.primaryAccentRegular};
        color: ${({theme}) => theme.primaryBackground};
        box-shadow: ${({theme}) => theme.boxGlow};
    }
`;

const CardTopRight = styled.div`
    justify-self: right;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardTopTitle = styled.h2`
    margin: 0;
    font-size: 0.7rem;
    font-weight: 300;
`;

const CardTopData = styled.p`
    margin: 0;
    padding: 0.5rem 0;
    font-size: 1rem;
    font-weight: 700;
`;

const DataCard = ({title, value, iconType, link}) => {
    return (
        <CardContainer>
            {/* <Link to={link}> */}
            <CardIcon to={link}>{icons[iconType]}</CardIcon>
            {/* </Link> */}
            <CardTopRight>
                <CardTopTitle>{title}</CardTopTitle>
                <CardTopData>{numberToHumanReadableString(value)}</CardTopData>
            </CardTopRight>
        </CardContainer>
    );
};

export default DataCard;
