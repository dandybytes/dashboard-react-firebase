import React, {useContext} from 'react';
import {AuthContext} from '../../../../context/authContext';

const UserStatus = () => {
    const {currentUser} = useContext(AuthContext);
    const {displayName, email} = currentUser;

    return <span>{displayName ? displayName : email}</span>;
};

export default UserStatus;
