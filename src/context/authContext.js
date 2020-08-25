import React, {useEffect, useState, createContext} from 'react';
import firebase from '../firebase/firebase';
import Spinner from '../components/common/spinner/Spinner';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setPending(false);
        });

        return () => unsubscribe();
    }, []);

    if (pending) {
        return <Spinner />;
    }

    return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>;
};
