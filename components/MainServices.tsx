import React from "react";
import ProCard from "./ProCard";

const Promotion = () => {
  const cardData = [
    {
      id: 1,
      name: "Rent a car",
      description:
        "Convenient and affordable car rental services tailored to your needs. Whether it's a short trip or a long journey, enjoy a hassle-free experience with a wide range of vehicles to choose from.",
      img: "/assets/images/about_us/rent6.jpg",
      link: "/",
    },
    {
      id: 2,
      name: "Repair Car",
      description:
        "Professional car repair services to keep your vehicle running smoothly. From routine maintenance to complex repairs, our skilled technicians ensure top-quality service and customer satisfaction.",
      img: "/assets/images/about_us/repair6.jpg",
      link: "/repair",
    },
  ];

  return (
    <div
      className="t-12 padding-x padding-y mb-3 max-width"
      id="discover bg-black"
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 my-8 py-6 gap-6">
        {cardData.map((card) => (
          <ProCard key={card.id} card={card}></ProCard>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
