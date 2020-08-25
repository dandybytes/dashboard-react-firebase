import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import firebase from '../../firebase/firebase';

import DataCard from './DataCard';

const DataContainer = styled.section`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    grid-gap: 3rem;
`;

const DataSummary = () => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        firebase
            .database()
            .ref('summary/stats')
            .on('value', snapshot => {
                setStats(snapshot.val());
            });
    }, []);

    return (
        <DataContainer>
            <DataCard
                key='funds'
                title='Funds'
                value={stats.numberFunds}
                iconType='funds'
                link='/funds'
            />
            <DataCard
                key='subfunds'
                title='Subfunds'
                value={stats.numberSubfunds}
                iconType='subfunds'
                link='/subfunds'
            />
            <DataCard
                key='reports'
                title='Reports'
                value={stats.numberReports}
                iconType='reports'
                link='/reports'
            />
            <DataCard
                key='alerts'
                title='Alerts'
                value={stats.numberAlerts}
                iconType='alerts'
                link='/alerts'
            />
        </DataContainer>
    );
};

export default DataSummary;
