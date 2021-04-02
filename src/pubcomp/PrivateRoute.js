import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const store = useContext(authContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                store.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;