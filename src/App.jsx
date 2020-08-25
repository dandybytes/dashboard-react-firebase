import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {ThemeContext} from './context/themeContext';
import {ngtDefaultTheme} from './styles/themeStyles';
import {GlobalStyles} from './styles/globalStyles';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import SummaryPage from './components/pages/SummaryPage';
import FundsPage from './components/pages/FundsPage';
import FundDetailsPage from './components/pages/FundDetailsPage';
import ReportsPage from './components/pages/ReportsPage';
import AlertsPage from './components/pages/AlertsPage';
import StatsPage from './components/pages/StatsPage';
import ProfilePage from './components/pages/ProfilePage';
import SettingsPage from './components/pages/SettingsPage';
import SignUpPage from './components/pages/SignUpPage';
import LogInPage from './components/pages/LogInPage';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme === 'ngtDefaultTheme' ? ngtDefaultTheme : ngtDefaultTheme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/summary' />
                    <PrivateRoute exact path='/summary' component={SummaryPage} />
                    <PrivateRoute exact path='/funds' component={FundsPage} />
                    <PrivateRoute exact path='/funds/:id' component={FundDetailsPage} />
                    <PrivateRoute exact path='/reports' component={ReportsPage} />
                    <PrivateRoute exact path='/alerts' component={AlertsPage} />
                    <PrivateRoute exact path='/stats' component={StatsPage} />
                    <PrivateRoute exact path='/profile' component={ProfilePage} />
                    <PrivateRoute exact path='/settings' component={SettingsPage} />
                    <PublicRoute exact path='/signup' component={SignUpPage} />
                    <PublicRoute exact path='/login' component={LogInPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
