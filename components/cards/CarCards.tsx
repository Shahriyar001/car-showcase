"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbManualGearbox } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { IoLogoModelS } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import CarDetails from "../CarDetails";

const CarCards = ({ car }: any) => {
  const { _id, image, title, rent, type, milage, fule, wheel, model, sit } =
    car || {};
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card card-compact bg-base-100 lg:w-96 w-80 shadow-xl">
      <figure className="overflow-hidden h-[30vh]">
        <Image height={240} width={640} src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="grid grid-cols-3">
          <div>
            <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
              <TbManualGearbox /> {type}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
              <IoSpeedometerOutline /> {milage}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
              <BsFillFuelPumpDieselFill /> {fule}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
              <PiSteeringWheelBold /> {wheel}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
              <IoLogoModelS /> {model}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
              <FaUsers /> {sit}
            </p>
          </div>
        </div>
        <div></div>
        <div className="card-actions justify-between items-center bg-slate-100 p-1">
          <p className="flex items-center gap-1 text-base font-bold text-gray-500 mb-1">
            <GrLocation />
            station road
          </p>

          <h6 className="text-primary font-semibold">
            Rent :{" "}
            <span className="text-3xl font-bold text-yellow-700">{rent}</span> /
            day
          </h6>
        </div>
        {/* <Link href={`/api/cars/${_id}`}> */}
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary w-full text-white flex items-center hover:btn-success"
        >
          <FaRegCalendarCheck />
          Rent now
        </button>
        {/* </Link> */}
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCards;
