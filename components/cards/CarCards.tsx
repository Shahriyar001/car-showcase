import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbManualGearbox } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { IoLogoModelS } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";

const CarCards = ({ car }: any) => {
  const { _id, image, title, rent, type, milage, fule, wheel, model, sit } =
    car || {};
  return (
    <div className="card card-compact bg-base-100 lg:w-96 w-80 shadow-xl">
      <figure className="overflow-hidden h-[30vh]">
        <Image height={240} width={640} src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="grid grid-cols-3">
          <div>
            <p>
              <TbManualGearbox />
            </p>
          </div>
          <div>
            <p>
              <IoSpeedometerOutline />
            </p>
          </div>
          <div>
            <p>
              <BsFillFuelPumpDieselFill />
            </p>
          </div>
          <div>
            <p>
              <PiSteeringWheelBold />
            </p>
          </div>
          <div>
            <p>
              <IoLogoModelS />
            </p>
          </div>
          <div>
            <p>
              <FaUsers />
            </p>
          </div>
        </div>
        <div className="card-actions justify-between items-center">
          <h6 className="text-primary font-semibold">Rent : ${rent} per day</h6>
          <Link href={`/services/${_id}`}>
            <button className="btn btn-primary text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
