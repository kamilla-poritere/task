import React from "react";
import { Link } from "react-router-dom";

export const List = ({ data }) => {
  return (
    <ul className="list-group">
      {data.map((item) => (
        <li key={item.id} className="list-group-item">
          <Link to={`/user/${item.id}`}>
            {item.first_name} {item.last_name}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
