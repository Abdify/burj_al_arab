import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [currentUser, setCurrentUser] = useContext(userContext);
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;