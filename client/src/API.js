import axios from "axios";

export const getData = async () => {
  return await axios.get(`/all`);
};

export const getYear = async (endYear) => {
  return await axios.post(`/year`, { endYear });
};

export const getTopic = async (topic) => {
  return await axios.post(`/topic`, { topic });
};

export const getSector = async (sector) => {
  return await axios.post(`/sector`, { sector });
};

export const getRegion = async (region) => {
  return await axios.post(`/region`, { region });
};

export const getPEST = async (pest) => {
  return await axios.post(`/pest`, { pest });
};

export const getSource = async (source) => {
  return await axios.post(`/source`, { source });
};

export const getCountry = async (country) => {
  return await axios.post(`/country`, { country });
};

export const getALLFilter = async (allFilterData) => {
  return await axios.post(`/allfilter`, {
    allFilterData,
  });
};
