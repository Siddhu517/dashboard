import axios from "axios";

const url = process.env.REACT_APP_PUBLIC_API;
console.log(process.env.REACT_APP_PUBLIC_API)

export const getData = async () => {
  return await axios.get(`${url}/all`);
};

export const getYear = async (endYear) => {
  return await axios.post(`${url}/year`, { endYear });
};

export const getTopic = async (topic) => {
  return await axios.post(`${url}/topic`, { topic });
};

export const getSector = async (sector) => {
  return await axios.post(`${url}/sector`, { sector });
};

export const getRegion = async (region) => {
  return await axios.post(`${url}/region`, { region });
};

export const getPEST = async (pest) => {
  return await axios.post(`${url}/pest`, { pest });
};

export const getSource = async (source) => {
  return await axios.post(`${url}/source`, { source });
};

export const getCountry = async (country) => {
  return await axios.post(`${url}/country`, { country });
};

export const getALLFilter = async (allFilterData) => {
  return await axios.post(`${url}/allfilter`, {
    allFilterData,
  });
};
