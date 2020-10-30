import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import { List, Pagination } from "../_components";

export const HomePage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(userActions.getAll(page));
  }, [page]);

  const handleChange = (newValue) => {
    setPage(newValue);
  };

  return (
    <>
      {users.loading && <p>Loading users...</p>}
      {users.error && <p className="text-danger">ERROR: {users.error}</p>}
      {users.items && (
        <>
          <Pagination
            onChange={handleChange}
            page={page}
            totalPage={users.items.total_pages}
          />
          <List data={users.items.data} />
        </>
      )}
    </>
  );
}
