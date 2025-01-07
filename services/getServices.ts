import axios from "axios";

export const getServices = async () => {
  const res = await axios("http://localhost:3000/services/api/get-all");
  return res.data;
};

export const getServicesDetails = async (id: any) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`);
  const service = res.json();
  return service;
};
