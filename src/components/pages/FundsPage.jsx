import React from 'react';
import styled from 'styled-components';

import PageContainer from '../common/page/PageContainer';
import FundDataTable from '../other/FundDataTable';

const ContentWrapper = styled.div`
    min-height: calc(100vh - ${({theme}) => theme.headerHeight});
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FundsPage = () => {
    return (
        <PageContainer>
            <ContentWrapper>
                <FundDataTable showHeader={false} showFooter={false} tableRows={20} />
            </ContentWrapper>
        </PageContainer>
    );
};

export default FundsPage;
