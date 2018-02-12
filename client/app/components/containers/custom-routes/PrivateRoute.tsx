import * as React from 'react';
import {Route, RouteProps, Redirect} from 'react-router-dom';
import {IAuthState} from 'redux/modules/auth/authReducer';
import isAuthAsManager from 'components/helper/userRoleHelper';

interface IPrivateRouteProps extends RouteProps {
  auth: IAuthState;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const {component: Component, auth, ...rest} = props;

  return (
    <Route
      {...rest}
      render={routeProps => {
        if (auth.user) {
          if (isAuthAsManager(auth.user)) {
            return <Redirect to="/employees" />;
          }
          return <Component {...routeProps} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;