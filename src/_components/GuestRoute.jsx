import React from "react";
import { Route, Redirect } from "react-router-dom";

export const GuestRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("user")) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}
