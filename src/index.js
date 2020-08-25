import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContextProvider} from './context/themeContext';
import {AuthContextProvider} from './context/authContext';
import {DataContextProvider} from './context/dataContext';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <AuthContextProvider>
                <DataContextProvider>
                    <App />
                </DataContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
