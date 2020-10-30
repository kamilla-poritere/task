import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

export const RegisterPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (user.email && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <>
      <h2 className="mt-4">Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !user.email ? " is-invalid" : "")
            }
          />
          {submitted && !user.email && (
            <div className="invalid-feedback">email is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.password ? " is-invalid" : "")
            }
          />
          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {registering && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Register
          </button>
          <Link to="/login" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
