import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="hero bg-slate-50 border-none rounded-lg px-2  my-10 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <Image
            src={
              "https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/cta-car-img.png"
            }
            alt="car"
            width={950}
            height={700}
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-extrabold">
            Ready to hit the road? Book <br /> your car today !
          </h1>
          <p className="py-6">
            Our friendly customer service team is here to help. Contact us
            anytime for support and inquiries.
          </p>
          <button className="btn btn-primary">Contuct Us</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
