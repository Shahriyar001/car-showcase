"use client";

import { getCars } from "@/services/getServices";
import React, { useEffect, useState } from "react";
import CarCards from "./cards/CarCards";

const Cars = () => {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCars(); // Assuming it returns { services: [...] }
        setCars(response.services); // Extract and set the services array
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-slate-800 mb-24 w-full">
      <div className="mx-auto md:ml-10 ml-20">
        <h1>Hello, {cars.length}</h1>
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car: any) => (
            <CarCards car={car} key={car._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
