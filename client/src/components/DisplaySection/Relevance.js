import React from "react";

const Relevance = ({viewData}) => {
  return (
    <div
      className="d-flex flex-column me-2 mt-3"
      style={{ border: "2px solid red", height: "6rem", width: "15rem" }}
    >
      <span className="ms-2" style={{ fontSize: "25px", fontWeight: "500" }}>
        Relevance
      </span>
      <span className="d-flex justify-content-center align-items-center mt-2 h2">
      {viewData ? <span> {viewData.relevance} </span> : ""}
      </span>
    </div>
  );
};

export default Relevance;
