import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import firebase from '../../firebase/firebase';
import {DataContext} from '../../context/dataContext';

import FundTableRow from './FundTableRow';
import Button from '../common/button/Button';

const maxNumFundsToShow = 10;

const TableName = styled.h2`
    margin: 1rem;
    font-size: 0.8rem;
    font-weight: 300;
    text-align: left;
    color: ${({theme}) => theme.textColor};
`;

const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: ${({theme}) => theme.primaryBackgroundLighter};
    box-shadow: ${({theme}) => theme.boxShadow};
`;

const TableTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.textColor};
`;

const TableBody = styled.tbody``;

const TableHeadData = styled.th`
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    line-height: 1.5rem;
`;

const FundDataTable = ({showHeader = false, showFooter = false, tableRows = 10}) => {
    const [fundData, setFundData] = useState([]);
    const {dictionary} = useContext(DataContext);

    useEffect(() => {
        firebase
            .database()
            .ref('summary/summary')
            .on('value', snapshot => {
                setFundData(snapshot.val());
            });
    }, []);

    return (
        <TableWrapper>
            {showHeader && <TableName>NextGateTech&trade;</TableName>}
            <TableTable>
                <TableHead>
                    <tr>
                        <TableHeadData>Funds</TableHeadData>
                        <TableHeadData>Subfunds</TableHeadData>
                        <TableHeadData>Share Classes</TableHeadData>
                        <TableHeadData>Reports</TableHeadData>
                        <TableHeadData>Alerts</TableHeadData>
                    </tr>
                </TableHead>
                <TableBody>
                    {!!dictionary &&
                        !!fundData &&
                        !!fundData.length &&
                        Object.keys(fundData)
                            .slice(0, tableRows)
                            .map((fundIndex, idx) => (
                                <FundTableRow
                                    key={fundIndex}
                                    fundIndex={fundIndex}
                                    index={idx}
                                    fundName={dictionary.funds.index2name[fundIndex]}
                                    fundDetails={fundData[fundIndex]}
                                />
                            ))}
                </TableBody>
            </TableTable>
            {showFooter && <Button text='See All Funds' link='/funds' />}
        </TableWrapper>
    );
};

export default FundDataTable;
