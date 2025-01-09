// const fetch = require("node-fetch");

import { CarProps, FilterProps } from "@/types";
import axios from "axios";

// export async function fetchCars(filters: FilterProps) {
//   const { manufacturer, year, fuel, limit, model } = filters;
//   const headers = {
//     "x-rapidapi-key": "67f86cf385msh2f4feadd7f3b554p18ac50jsn454fc3e201de",
//     "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   const response = await fetch(
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//     {
//       headers: headers,
//     }
//   );
//   const result = await response.json();
//   return result;
// }
// export async function fetchCars(filters: FilterProps) {
//   const { manufacturer, year, fuel, limit, model } = filters;

//   const headers = {
//     "x-rapidapi-key": "af173f1065mshbc5491b12abe825p11cea7jsn65416b742dc2",
//     "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

//   try {
//     // Making the API request using axios
//     const response = await axios.get(url, { headers });
//     return response.data; // Return the response data
//   } catch (error) {
//     console.error("Error fetching cars:", error);
//     throw new Error("Failed to fetch cars."); // Handle errors gracefully
//   }
// }

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split("")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

// 1st api key  "67f86cf385msh2f4feadd7f3b554p18ac50jsn454fc3e201de" ||
