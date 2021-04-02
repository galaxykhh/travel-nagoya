import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/header';
import Main from './pages/Main';
import Food from './pages/Food';
import Tour from './pages/Tour';
import Profile from './pages/Profile'
import Shopping from './pages/Shopping';
import LoginPage from './pages/LoginPage';
import MakeAccount from './pages/MakeAccount';
import ScrollToTop from './index';
import LoginButton from './pubcomp/LoginButton';
import LogoutButton from './pubcomp/LogoutButton';
import PrivateRoute from './pubcomp/PrivateRoute';

export const authContext = createContext();

function App() {

    const [user, setUser] = useState('');
    const store = { user, setUser };

    return (
        <authContext.Provider value={store} >
            <BrowserRouter>
                <Header />
                {user ? (
                    <LogoutButton> 로그아웃 </LogoutButton>
                ) : (
                    <LoginButton to='/login' > 로그인 </LoginButton>
                )}
                <Switch>
                    <Route exact path='/'>
                        <ScrollToTop />
                        <Main />
                    </Route>
                    <PrivateRoute exact path='/food'>
                        <ScrollToTop />
                        <Food />
                    </PrivateRoute>
                    <PrivateRoute exact path='/tourism'>
                        <ScrollToTop />
                        <Tour />
                    </PrivateRoute>
                    <PrivateRoute exact path='/shopping'>
                        <ScrollToTop />
                        <Shopping />
                    </PrivateRoute>
                    <Route exact path='/login'>
                        <ScrollToTop />
                        <LoginPage />
                    </Route>
                    <PrivateRoute exact path='/makeaccount'>
                        <MakeAccount />
                    </PrivateRoute>
                    <PrivateRoute exact path='/profile'>
                        <ScrollToTop />
                        <Profile />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </authContext.Provider>
    );
}

export default App;