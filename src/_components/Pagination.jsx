import React from "react";

export const Pagination = ({ totalPage, page, onChange }) => {
  return (
    <nav className="mt-4">
      <ul className="pagination">
        <li className={`page-item ${page < 2 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => onChange((page) => page - 1)}
          >
            Prev
          </a>
        </li>

        {[...Array(totalPage)].map((x, i) => (
          <li
            key={i}
            className={`page-item ${page === 1 + i ? "disabled" : ""}`}
          >
            <a
              key={i}
              className="page-link"
              href="#"
              onClick={() => onChange(1 + i)}
            >
              {1 + i}
            </a>
          </li>
        ))}

        <li className={`page-item ${page >= totalPage ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => onChange((page) => page + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
