import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} {...rest} /> : <Redirect to="/" />}
  />
);

export default AuthenticatedRoute;