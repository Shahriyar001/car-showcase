import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className="hero bg-slate-50 border-none rounded-lg px-2 my-10 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <Image
            src={
              "https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/our-faqs-car-img.png"
            }
            alt="car"
            width={750}
            height={700}
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold mb-8">
            Frequently ask question
          </h1>
          <div className="space-y-4">
            <div tabIndex={0} className="collapse collapse-arrow  rounded-box">
              <div className="collapse-title text-xl font-medium">
                What Do I Need To Rent A Car?
              </div>
              <div className="collapse-content">
                <p>
                  Explore our diverse selection of high-end vehicles, choose
                  your preferred pickup and return dates, and select a location
                  that best fits your needs
                </p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow rounded-box">
              <div className="collapse-title text-xl font-medium">
                How Old I Deed To Be To Rent A Car?
              </div>
              <div className="collapse-content">
                <p>
                  Explore our diverse selection of high-end vehicles, choose
                  your preferred pickup and return dates, and select a location
                  that best fits your needs
                </p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow rounded-box">
              <div className="collapse-title text-xl font-medium">
                Car I Rent A Car With A Debit Card?
              </div>
              <div className="collapse-content">
                <p>
                  Explore our diverse selection of high-end vehicles, choose
                  your preferred pickup and return dates, and select a location
                  that best fits your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
