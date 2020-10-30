import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import { Link, useHistory } from "react-router-dom";

export const Toolbar = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userActions.getById(1));
  }, []);

  const logout = () => {
    dispatch(userActions.logout());
    history.push("/");
  }

  return (
    <nav className="navbar navbar-light bg-light">
      {localStorage.getItem("user") ? (
        <>
          {user.items && (
            <Link className="navbar-brand" to="/profile">
              <img
                src={user.items.data.avatar}
                width="30"
                height="30"
                className="d-inline-block align-top mr-2"
                alt=""
                loading="lazy"
              />
              {user.items.data.first_name} {user.items.data.last_name}
            </Link>
          )}
          <div>
            <Link className="btn btn-link" to="/">
              Home
            </Link>
            <Link className="btn btn-link" to="/users">
              Users
            </Link>
            <Link className="btn btn-link" to="/profile">
              Profile
            </Link>
            <button className="btn btn-primary ml-4" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link className="btn btn-link" to="/">
              Home
            </Link>
            <Link className="btn btn-link" to="/users">
              Users
            </Link>
          </div>
          <div>
            <Link className="btn btn-link" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
