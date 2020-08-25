import React from 'react';
import PageContainer from '../common/page/PageContainer';
import DataSummary from '../other/DataSummary';
import FundDataTable from '../other/FundDataTable';

const SummaryPage = () => {
    return (
        <PageContainer>
            <DataSummary />
            <FundDataTable showHeader={true} showFooter={true} tableRows={10} />
        </PageContainer>
    );
};

export default SummaryPage;
