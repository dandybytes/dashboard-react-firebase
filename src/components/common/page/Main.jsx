import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
    max-width: 1200px;
    min-height: calc(100vh - ${({theme}) => theme.headerHeight});
    margin: 0 auto;
    padding: 0 4rem;
`;

const Main = ({children}) => {
    return <MainContainer>{children}</MainContainer>;
};

export default Main;
