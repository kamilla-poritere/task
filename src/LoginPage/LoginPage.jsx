import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const loggingIn = useSelector((state) => state.authentication.loggingIn);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (form.email && form.password) {
      dispatch(userActions.login(form.email, form.password));
    }
  }

  return (
    <>
      <h2 className="mt-4">Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !form.email ? " is-invalid" : "")
            }
          />
          {submitted && !form.email && (
            <div className="invalid-feedback">email is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !form.password ? " is-invalid" : "")
            }
          />
          {submitted && !form.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </>
  );
}
