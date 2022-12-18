import React from "react";
import "./main.css";
import CountrySection from "./CountrySection";
import YearSection from "./YearSection";
import TopicSection from "./TopicSection";
import Intensity from "./Intensity";
import BarGraph from "./BarGraph";
import Likelihood from "./Likelihood";
import Relevance from "./Relevance";
import RegionSection from "./RegionSection";

const Main = ({
  allData,
  filterData,
  onClick,
  viewData,
}) => {
  return (
    <div className="main">
      <div className="mt-2 d-flex justify-content-between align-items-center">
        <YearSection  viewData={viewData} />
        <TopicSection viewData={viewData} />
        <Intensity viewData={viewData} />
        <CountrySection viewData={viewData} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <BarGraph
          filterData={filterData}
          onClick={onClick}
        />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Likelihood viewData={viewData} />
          <Relevance viewData={viewData} />
          <RegionSection viewData={viewData} />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Main;
