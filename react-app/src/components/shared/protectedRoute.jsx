import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../context/userContext";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const currentUser = useContext(UserContext);
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
