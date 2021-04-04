import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../App';

const PrivateRoute = ({ children }) => {
    const store = useContext(authContext);

    return (
        <Route
            render={() => store.user ? (children) : (<Redirect to='/login'/>)}
        />
    );
}

export default PrivateRoute;