import React, { useState, useEffect} from "react";
import FilterSection from "./FilterSection";
import Main from "./DisplaySection/Main";
import { getData } from "../API";


const Index = () => {
  const [filterData, setFilterData] = useState([]);
  //const [allData, setAllData] = useState(null);
  const [viewData, setViewData] = useState(null);

 /*  useEffect(() => {
   const fetchdata = async () => {
      const res = await getData();
      setAllData(res.data);
      //console.log(res.data)
    }
    fetchdata();
  }, []); */

  //barChart click function 
  const onClick = (d, i) => {
    setViewData(i);
    //console.log(i);
  };

 
  return (
    <div className="container-fluid m-0 p-0 bg-secondary">
      <div className="d-flex justify-content-between align-items-center p-2">
        {/* BrandName */}
        <div
          className=" d-flex justify-content-center align-items-center bg-success text-light mt-2 h5 me-2"
          style={{ width: "20rem", height: "3rem" , border:"4px solid yellow" }}
        >
          <span>Dashboard</span>
        </div>

        <div
          className="d-flex justify-content-end align-items-center border border-primary bg-warning"
          style={{ height: "3rem", width: "100%" }}
        >
          {/* Heading Section */}

          <div className="text-primary" style={{ fontWeight: "700" }}>
            UserName
          </div>
          <div
            className="bg-danger ms-3 me-3"
            style={{ height: "35px", width: "35px", borderRadius: "50%" }}
          ></div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        {/* SideSection Filters  */}
        <FilterSection setFilterData={setFilterData} setViewData={setViewData}  />

        {/* Display Section   */}
        <Main
          filterData={filterData}
          onClick={onClick}
          viewData={viewData}   
        />
      </div>
    </div>
  );
};

export default Index;
