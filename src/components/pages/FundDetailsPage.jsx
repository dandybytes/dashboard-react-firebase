import React, {useState, useEffect, useContext, memo} from 'react';
import PageContainer from '../common/page/PageContainer';
import {DataContext} from '../../context/dataContext';
import firebase from '../../firebase/firebase';
import styled from 'styled-components';

const SelectField = styled.select`
    min-width: 5rem;
    color: black;
`;

const FundDetailsPage = memo(({match}) => {
    const {dictionary} = useContext(DataContext);

    const [fundData, setFundData] = useState(null);
    const [selectedSubfund, setSelectedSubfund] = useState('');
    const [selectedShareClass, setSelectedShareClass] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const fundId = match.params.id;
    const fundName = dictionary?.funds?.index2name[fundId];

    useEffect(() => {
        firebase
            .database()
            .ref('main')
            .child(fundId)
            .on('value', snapshot => {
                setFundData(snapshot.val());
            });
    }, []);

    return (
        <PageContainer>
            <p>fund name: {dictionary && dictionary.funds.index2name[fundId]}</p>
            <form>
                <label>
                    subfunds:&nbsp;
                    <SelectField onChange={event => setSelectedSubfund(event.target.value)}>
                        <option value='title' disabled autoFocus>
                            subfunds
                        </option>
                        {fundData &&
                            Object.keys(fundData).map(subfundIndex => (
                                <option key={subfundIndex} value={subfundIndex}>
                                    {dictionary?.subfunds?.index2name[subfundIndex]}
                                </option>
                            ))}
                    </SelectField>
                </label>
                <br />
                {selectedSubfund && (
                    <label>
                        share classes:&nbsp;
                        <SelectField onChange={event => setSelectedShareClass(event.target.value)}>
                            <option value='title' disabled autoFocus>
                                share class
                            </option>
                            {fundData &&
                                fundData[selectedSubfund] &&
                                Object.keys(fundData[selectedSubfund]).map(shareClassIndex => (
                                    <option key={shareClassIndex} value={shareClassIndex}>
                                        {dictionary?.shares?.index2name[shareClassIndex]}
                                    </option>
                                ))}
                        </SelectField>
                    </label>
                )}
                <br />
                {selectedShareClass && (
                    <label>
                        dates:&nbsp;
                        <SelectField onChange={event => setSelectedDate(event.target.value)}>
                            <option value='title' disabled autoFocus>
                                data
                            </option>
                            {fundData &&
                                fundData[selectedSubfund] &&
                                fundData[selectedSubfund][selectedShareClass] &&
                                Object.keys(fundData[selectedSubfund][selectedShareClass]).map(
                                    date => (
                                        <option key={date} value={date}>
                                            {date}
                                        </option>
                                    )
                                )}
                        </SelectField>
                    </label>
                )}
            </form>
            <br />
            {selectedDate && (
                <>
                    <p>
                        report ready:{' '}
                        {fundData[selectedSubfund][selectedShareClass][selectedDate][0]
                            ? 'true'
                            : 'false'}
                    </p>
                    <p>alerts: {fundData[selectedSubfund][selectedShareClass][selectedDate][1]}</p>
                </>
            )}
        </PageContainer>
    );
});

export default FundDetailsPage;
