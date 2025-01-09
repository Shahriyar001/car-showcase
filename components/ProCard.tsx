import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProCard = ({ card }: any) => {
  const { img, name, description, link } = card;
  return (
    <div className="card bg-base-100 shadow-xl flex flex-col md:flex-row lg:flex-row-reverse">
      {/* <motion.figure
                whileHover={{ scale: 1.1 }}
            > */}
      {/* <img src={img} className="w-full" alt="Movie" /> */}
      {/* <div className="rounded-xl flex items-center overflow-hidden"> */}
      <Image src={img} alt="service" width={300} height={150} />
      {/* </div> */}

      <div className="card-body md:1/2 lg:w-1/2">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}{" "}
          <Link href={link} className="text-secondary">
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProCard;
