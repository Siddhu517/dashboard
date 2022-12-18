import React from "react";

const TopicSection = ({viewData}) => {
  return (
    <div className="" style={{ height: "10rem", width: "16rem" }}>
      <div
        className="topic mb-2"
        style={{ border: "2px solid red", height: "4.7rem", width: "16rem" }}
      >
        <span className=" ms-2 mt-1 d-flex justify-content-start align-items-center" style={{fontSize:"20px", fontWeight:"600"}}>
          Topic:
        </span>
        <span className="d-flex justify-content-center align-items-center" style={{fontSize:"18px", fontWeight:"500"}}>
        {viewData ? <span> {viewData.topic} </span> : ""}
        </span>
      </div>
      <div
        className="sector mt-1"
        style={{ border: "2px solid red", height: "4.8rem", width: "16rem" }}
      >
        <span className="ms-2 mt-1 d-flex justify-content-start align-items-center" style={{fontSize:"20px", fontWeight:"600"}}>
          Sector:
        </span>
        <span className="d-flex justify-content-center align-items-center" style={{fontSize:"18px", fontWeight:"500"}}>
        {viewData ? <span> {viewData.sector} </span> : ""}
        </span>
      </div>
    </div>
  );
};

export default TopicSection;
