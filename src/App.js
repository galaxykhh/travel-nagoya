import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import FoodPage from './pages/FoodPage';
import TourPage from './pages/TourPage';
import ShoppingPage from './pages/ShoppingPage';
import LoginPage from './pages/LoginPage';
import MakeAccount from './pages/MakeAccount';
import ScrollToTop from './publicComponents/ScrollTop';
import LoginButton from './publicComponents/LoginButton';
import LogoutButton from './publicComponents/LogoutButton';
import PrivateRoute from './publicComponents/PrivateRoute';

export const authContext = createContext();

const App = () => {
    const [user, setUser] = useState('');
    const store = { user, setUser };

    return (
        <authContext.Provider value={store} >
            <BrowserRouter>
                <Header />
                {user ?
                    <LogoutButton> 로그아웃 </LogoutButton> :
                    <LoginButton to='/login' > 로그인 </LoginButton>
                }
                <Switch>
                    <Route exact path='/'>
                        <ScrollToTop />
                        <MainPage />
                    </Route>
                    <PrivateRoute exact path='/food'>
                        <ScrollToTop />
                        <FoodPage />
                    </PrivateRoute>
                    <PrivateRoute exact path='/tourism'>
                        <ScrollToTop />
                        <TourPage />
                    </PrivateRoute>
                    <PrivateRoute exact path='/shopping'>
                        <ScrollToTop />
                        <ShoppingPage />
                    </PrivateRoute>
                    <Route exact path='/login'>
                        <ScrollToTop />
                        <LoginPage />
                    </Route>
                    <Route exact path='/makeaccount'>
                        <MakeAccount />
                    </Route>
                </Switch>
            </BrowserRouter>
        </authContext.Provider>
    );
}

export default App;