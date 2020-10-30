import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { GuestRoute, PrivateRoute, Toolbar } from "../_components";

import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { UsersPage } from "../UsersPage";
import { ProfilePage } from "../ProfilePage";

export const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Router history={history}>
      <Toolbar />
      <div className="container">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <GuestRoute path="/login" component={LoginPage} />
          <GuestRoute path="/register" component={RegisterPage} />
          <Route path="/users" component={UsersPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}
