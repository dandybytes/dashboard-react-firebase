import React, {createContext, useState} from 'react';

export const ThemeContext = createContext({theme: 'ngtDefault'});

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('ngtDefaultTheme');
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [sidebarHovered, setSidebarHovered] = useState(false);
    const [profileMenuVisible, setProfileMenuVisible] = useState(false);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                sidebarExpanded,
                setSidebarExpanded,
                sidebarHovered,
                setSidebarHovered,
                profileMenuVisible,
                setProfileMenuVisible
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
