import React from "react";

const YearSection = ({viewData}) => {
  return (
    <div className="ms-4 d-flex justify-content-center align-items-center">
      <div
        className="circle bg-primary text-light d-flex flex-column align-items-center justify-content-center"
        style={{
          height: "8rem",
          width: "8rem",
          border: "15px solid red",
          borderRadius: "50%",
        }}
      >
        <span>Year</span>
          {viewData ? <span> {viewData.start_year} </span> : ""}
          {viewData ? <span> {viewData.end_year} </span> : ""}
      </div>
    </div>
  );
};

export default YearSection;
