// import axios from "axios";

// export const getServices = async () => {
//   const res = await axios("http://localhost:3000/services/api/get-all");
//   return res.data;
// };

// export const getServicesDetails = async (id: any) => {
//   const res = await fetch(`http://localhost:3000/services/api/${id}`);
//   const service = res.json();
//   return service;
// };

// export const getCars = async () => {
//   const res = await axios("http://localhost:3000/api/cars/get-all");
//   console.log(res.data);
//   return res.data;
// };

// export const getCarsDetails = async (id: any) => {
//   const res = await fetch(`http://localhost:3000/api/cars/${id}`);
//   const car = res.json();
//   return car;
// };

import axios from "axios";

export const getServices = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServicesDetails = async (id: any) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(`Error fetching service details for ID ${id}:`, error);
    return null; // Return null or an appropriate fallback value
  }
};

export const getCars = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/get-all`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export const getCarsDetails = async (id: any) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(`Error fetching car details for ID ${id}:`, error);
    return null; // Return null or an appropriate fallback value
  }
};
