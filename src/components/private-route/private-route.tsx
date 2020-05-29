import React, { useContext, FunctionComponent } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthContext } from '@/pages/auth';
import { CLIENT_RENEG_LIMIT } from 'tls';


export const PrivateRoute: FunctionComponent<RouteProps> = (props) => {

  const { component: RouteComponent, ...rest } = props;

  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps: any) => {
        return !!currentUser
          // @ts-ignore
          ? <RouteComponent  {...routeProps} />
          : <Redirect to='/login' />
      }}
    />
  )
}