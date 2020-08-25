import React from 'react';
import styled from 'styled-components';

const PlaceHolderWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - ${({theme}) => theme.headerHeight});
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Placeholder = ({children}) => {
    return <PlaceHolderWrapper>{children}</PlaceHolderWrapper>;
};

export default Placeholder;
