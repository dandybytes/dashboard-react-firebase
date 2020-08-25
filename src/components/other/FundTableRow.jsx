import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {numberToHumanReadableString} from '../../helpers/formatting';

const TableRow = styled.tr`
    &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
`;

const TableData = styled.td`
    padding: 1rem;
    font-size: 0.8rem;

    &:not(:first-child) {
        text-align: center;
    }
`;

const FundIcon = styled.div`
    height: 1.25rem;
    width: 1.25rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.secondaryAccentRegular};
    color: white;
    margin: 0 1rem;
    font-size: 1rem;
    border-radius: 50%;
`;

const FundName = styled.span`
    color: white;
`;

const fundSymbolList = [
    '&#x262F;',
    '&#x2600;',
    '&#x2605;',
    '&#x265B;',
    '&#x2660;',
    '&#x2663;',
    '&#x2665;',
    '&#x2666;',
    '&#x266A;',
    '&#x2684;',
    '&#x262F;',
    '&#x2600;',
    '&#x2605;'
];

// const getRandomItem = itemList => itemList[Math.floor(Math.random() * itemList.length)];

const FundTableRow = ({fundName, fundDetails, fundIndex, index}) => {
    const {subfunds, shares, reports, alerts} = fundDetails;
    const numSubfunds = subfunds.length;
    const numShareClasses = shares.length;

    if (!fundName || !reports || !alerts || !numSubfunds || !numShareClasses) return null;

    return (
        <TableRow>
            <TableData>
                <Link to={`/funds/${fundIndex}`}>
                    <FundIcon
                        dangerouslySetInnerHTML={{__html: `${fundSymbolList[index]}`}}
                    ></FundIcon>
                    <FundName>{fundName}</FundName>
                </Link>
            </TableData>
            <TableData>{numberToHumanReadableString(numSubfunds)}</TableData>
            <TableData>{numberToHumanReadableString(numShareClasses)}</TableData>
            <TableData>{numberToHumanReadableString(reports)}</TableData>
            <TableData>{numberToHumanReadableString(alerts)}</TableData>
        </TableRow>
    );
};

export default FundTableRow;
