import React from "react";

const CountrySection = ({ viewData }) => {
  return (
    <div
      className="d-flex flex-column me-3"
      style={{ border: "2px solid red", height: "10rem", width: "20rem" }}
    >
      <span className="ms-2" style={{ fontSize: "20px", fontWeight: "600" }}>
        Country
      </span>
      <span
        className="d-flex justify-content-center align-items-center mt-4"
        style={{ fontWeight: "500", fontSize: "20px" }}
      >
        {viewData ? <span> {viewData.country} </span> : ""}
      </span>
    </div>
  );
};

export default CountrySection;
