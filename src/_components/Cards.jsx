import React from "react";

export const Cards = ({ data }) => {
  return (
    <div className="row">
      {data.map((item) => (
        <div key={item.id} className="col-sm-6">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">
                {item.first_name} {item.last_name}
              </h5>
              <p className="card-text">
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
