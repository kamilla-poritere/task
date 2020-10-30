import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

export const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    id: 1,
    name: "",
    job: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const updating = useSelector((state) => state.update.updating);

  useEffect(() => {
    dispatch(userActions.getById(profile.id));
  }, []);

  useEffect(() => {
    if (user.items) {
      setProfile((profile) => ({
        ...profile,
        name: user.items.data.first_name,
        job: user.items.ad.company,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((profile) => ({ ...profile, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (profile.name && profile.job && profile.id) {
      dispatch(userActions.update(profile.name, profile.job, profile.id));
    }
  }

  return (
    <>
      <h2 className="mt-4">Profile</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !profile.name ? " is-invalid" : "")
            }
          />
          {submitted && !profile.name && (
            <div className="invalid-feedback">Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Job</label>
          <input
            type="text"
            name="job"
            value={profile.job}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !profile.job ? " is-invalid" : "")
            }
          />
          {submitted && !profile.job && (
            <div className="invalid-feedback">Job is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {updating && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Update
          </button>
        </div>
      </form>
    </>
  );
}
