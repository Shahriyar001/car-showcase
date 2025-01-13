import Image from "next/image";
import React from "react";

const Luxury = () => {
  return (
    <div className="lg:ml-12 mt-12">
      <div className="hero lg:h-96 ">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-5">
          {/* Wrapper div with background image */}
          <div
            className="relative rounded-lg shadow-2xl w-1/2 ml-12 mt-6"
            style={{
              backgroundImage:
                "url('https://anpsthemes.com/limorent/demo-1/wp-content/uploads/2016/01/calltoaction-backgroundimage.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "800px",
              height: "600px",
            }}
          >
            <Image
              src="https://anpsthemes.com/limorent/demo-1/wp-content/uploads/2016/01/calltoaction-merc.png"
              alt="car img"
              layout="fill" // Ensures the image fills its container
              objectFit="contain" // Adjust how the image fits inside the container
            />
          </div>

          {/* Text Content */}
          <div className="w-1/2 ml-6">
            <h1 className="text-5xl font-bold">THE LUXURY YOU DESIRVE!</h1>
            <h1 className="text-5xl font-bold">THE LUXURY YOU DESIRVE!</h1>
            <p className="py-6">
              Let us spoil you and bring the joy of your ride. Either for your
              business or plesior, wedding day or that special love in your
              life, we take care of it all. Top cars for every occasion with
              full service and the best staff.
            </p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
