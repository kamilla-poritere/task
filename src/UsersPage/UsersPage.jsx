import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import { Cards } from "../_components";

export const UsersPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  return (
    <>
      {users.loading && <p>Loading users...</p>}
      {users.error && <p className="text-danger">ERROR: {users.error}</p>}
      {users.items && <Cards data={users.items.data} />}
    </>
  );
}
