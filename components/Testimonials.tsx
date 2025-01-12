import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import Review from "./cards/Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Leslie Alexernder",
      img: "https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/author-3.jpg",
      review:
        "Renting a car from Carhub was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    },
    {
      _id: 2,
      name: "Michael Johnson",
      img: "https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/author-4.jpg",
      review:
        "Carhub made my road trip an unforgettable experience. The car was clean, well-maintained, and the pickup process was seamless.",
    },
    {
      _id: 3,
      name: "Emily Davis",
      img: "https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/author-5.jpg",
      review:
        "I highly recommend Carhub for anyone looking for a hassle-free car rental service. Great customer support and quality vehicles!",
    },
  ];

  return (
    <div className="my-10 py-8">
      <div className="flex justify-between my-6">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Clients Says</h2>
        </div>
        <div className="">
          <h1 className="text-5xl font-bold text-gray-300">
            <FaQuoteLeft className="w-10 h-10 lg:w-20 lg:h-20" />
          </h1>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
