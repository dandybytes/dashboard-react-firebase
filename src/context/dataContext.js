import React, {useEffect, useState, createContext} from 'react';
import firebase from '../firebase/firebase';

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
    const [dictionary, setDictionary] = useState(null);

    useEffect(() => {
        firebase
            .database()
            .ref('dictionary')
            .on('value', snapshot => {
                setDictionary(snapshot.val());
            });
    }, []);

    return <DataContext.Provider value={{dictionary}}>{children}</DataContext.Provider>;
};
