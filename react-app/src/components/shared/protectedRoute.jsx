import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  path,
  currentUser,
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser.hasOwnProperty("email"))
          return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
