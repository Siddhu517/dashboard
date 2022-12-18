import React, { useState, useEffect } from "react";
import "./filterSection.css";
import {
  getYear,
  getTopic,
  getSector,
  getRegion,
  getPEST,
  getSource,
  getCountry,
  getALLFilter,
} from "../API";

const FilterSection = ({ setFilterData, setViewData }) => {
  const [endYear, setEndYear] = useState();
  const [topic, setTopic] = useState("");
  const [sector, setSector] = useState("");
  const [region, setRegion] = useState("");
  const [pest, setPEST] = useState("");
  const [source, setSource] = useState("");
  const [country, setCountry] = useState("");

  // filter search recommendations
  const [recommendations, setRecommendations] = useState([]);
  const allFilterData = {
    endYear,
    topic,
    sector,
    region,
    pest,
    source,
    country,
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await getALLFilter(allFilterData);
        //console.log(res.data);
        setRecommendations(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (endYear || topic || sector || region || pest || source || country) {
      fetchResults();
    } else {
      setRecommendations([]);
    }
  }, [endYear, topic, sector, region, pest, source, country]);

  //filterEndYear
  const filterEndYear = async () => {
    if (endYear) {
      const res = await getYear(endYear);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterTopic
  const filterTopic = async () => {
    if (topic) {
      const res = await getTopic(topic);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterSector
  const filterSector = async () => {
    if (sector) {
      const res = await getSector(sector);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterRegion
  const filterRegion = async () => {
    if (region) {
      const res = await getRegion(region);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterPEST
  const filterPEST = async () => {
    if (pest) {
      const res = await getPEST(pest);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterSource
  const filterSource = async () => {
    if (source) {
      const res = await getSource(source);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterCountry
  const filterCountry = async () => {
    if (country) {
      const res = await getCountry(country);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  //filterALLData
  const filterALL = async () => {
    if (allFilterData) {
      const res = await getALLFilter(allFilterData);
      setFilterData(res.data);
    } else {
      setFilterData("");
    }
  };

  const handleReset = () => {
    setViewData("");
    setFilterData([]);
    setRecommendations("");
    setEndYear("");
    setTopic("");
    setSector("");
    setRegion("");
    setPEST("");
    setSource("");
    setCountry("");
  };

  //filter section of search box recommendation list click to copy text

  const copyTextTopic = (e) => {
    //console.log(e.target.innerHTML);
    setTopic(e.target.innerHTML);
  };
  const copyTextSector = (e) => {
    //console.log(e.target.innerHTML);
    setSector(e.target.innerHTML);
  };
  const copyTextRegion = (e) => {
    //console.log(e.target.innerHTML);
    setRegion(e.target.innerHTML);
  };
  const copyTextPEST = (e) => {
    //console.log(e.target.innerHTML);
    setPEST(e.target.innerHTML);
  };
  const copyTextSource = (e) => {
    //console.log(e.target.innerHTML);
    setSource(e.target.innerHTML);
  };
  const copyTextCountry = (e) => {
    //console.log(e.target.innerHTML);
    setCountry(e.target.innerHTML);
  };

  return (
    <div className="filter d-flex flex-column justify-content-start align-items-center bg-info">
      <ul className="list-unstyled filterMenuList">
        <li className="firstli">Filters</li>
        <li className="lastli">
          <div className="d-flex justify-content-center align-items-center m-1">
            <button
              className="btn btn-primary d-flex me-5 btn-sm"
              onClick={filterALL}
            >
              Fillter
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleReset}>
              Reset
            </button>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#year"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              End Year
            </a>

            <div className="collapse" id="year">
              <div className="card card-body">
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="eg. 2022"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                  />
                  <span
                    onClick={filterEndYear}
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    filter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#year"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Topics
            </a>

            <div className="collapse" id="year">
              <div className="card card-body ">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. topic name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={topic}
                    onChange={(e) => {
                      setTopic(e.target.value);
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={filterTopic}
                  >
                    filter
                  </span>
                  <div className="lists">
                    {recommendations.length > 0 && (
                      <ul className="list-unstyled filterRecommendationList">
                        {recommendations.map((recommendation) => (
                          <li
                            key={recommendation._id}
                            onClick={(e) => copyTextTopic(e)}
                          >
                            {recommendation.topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#sector"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Sector
            </a>

            <div className="collapse" id="sector">
              <div className="card card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="sector"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={sector}
                    onChange={(e) => {
                      setSector(e.target.value);
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={filterSector}
                  >
                    filter
                  </span>
                  <div className="lists">
                    {recommendations.length > 0 && (
                      <ul className="list-unstyled filterRecommendationList">
                        {recommendations.map((recommendation) => (
                          <li
                            key={recommendation._id}
                            onClick={(e) => copyTextSector(e)}
                          >
                            {recommendation.sector}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#region"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Region
            </a>

            <div className="collapse" id="region">
              <div className="card card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="region"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={region}
                    onChange={(e) => {
                      setRegion(e.target.value);
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={filterRegion}
                  >
                    filter
                  </span>
                  <div className="lists">
                    {recommendations.length > 0 && (
                      <ul className="list-unstyled filterRecommendationList">
                        {recommendations.map((recommendation) => (
                          <li
                            key={recommendation._id}
                            onClick={(e) => copyTextRegion(e)}
                          >
                            {recommendation.region}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#PEST"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              PEST
            </a>

            <div className="collapse" id="PEST">
              <div className="card card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pestle"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={pest}
                    onChange={(e) => {
                      setPEST(e.target.value);
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={filterPEST}
                  >
                    filter
                  </span>
                  <div className="lists">
                    {recommendations.length > 0 && (
                      <ul className="list-unstyled filterRecommendationList">
                        {recommendations.map((recommendation) => (
                          <li
                            key={recommendation._id}
                            onClick={(e) => copyTextPEST(e)}
                          >
                            {recommendation.pestle}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#source"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Source
            </a>

            <div className="collapse" id="source">
              <div className="card card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="source"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={source}
                    onChange={(e) => {
                      setSource(e.target.value);
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={filterSource}
                  >
                    filter
                  </span>
                  <div className="lists">
                    {recommendations.length > 0 && (
                      <ul className="list-unstyled filterRecommendationList">
                        {recommendations.map((recommendation) => (
                          <li
                            key={recommendation._id}
                            onClick={(e) => copyTextSource(e)}
                          >
                            {recommendation.source}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="filterMenu">
            <a
              className="nav-link text-dark "
              data-bs-toggle="collapse"
              href="#country"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Country
            </a>

            <div className="collapse" id="country">
              <div className="card card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={filterCountry}
                  >
                    filter
                  </span>
                  <div className="lists">
                    {recommendations.length > 0 && (
                      <ul className="list-unstyled filterRecommendationList">
                        {recommendations.map((recommendation) => (
                          <li
                            key={recommendation._id}
                            onClick={(e) => copyTextCountry(e)}
                          >
                            {recommendation.country}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="lastli">
          <div className="d-flex justify-content-center align-items-center m-1">
            <button
              className="btn btn-primary d-flex me-5 btn-sm"
              onClick={filterALL}
            >
              Fillter
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleReset}>
              Reset
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterSection;
