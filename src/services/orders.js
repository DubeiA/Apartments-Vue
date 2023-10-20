import axiosInstance from "./axios";

export const bookApartment = (data) => {
  return axiosInstance.post("/orders", data);
};

export const getOrders = () => {
  return axiosInstance.get("/orders");
};
