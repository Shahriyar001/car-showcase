import { ServiceCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { _id, img, title, price, description } = service || {};
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="overflow-hidden h-[30vh]">
        <Image height={240} width={640} src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h6 className="text-primary font-semibold">Price : ${price}</h6>
          <Link href={`/services/${_id}`}>
            <button className="btn btn-primary text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
