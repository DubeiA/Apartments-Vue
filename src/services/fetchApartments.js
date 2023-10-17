import axios from "./axios";

export const getApartmentsList = () => {
  return axios.get("/apartments");
};

export const getApartmentsById = (id) => {
  return axios.get(`/apartments/${id}`);
};
