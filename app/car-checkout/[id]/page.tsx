"use client";
import { getCarsDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";

const Checkout = ({ params }: any) => {
  const { data } = useSession();
  console.log(data);
  const unwrappedParams: any = React.use(params);
  const [car, setCar] = useState({});
  const loadService = async () => {
    const details = await getCarsDetails(unwrappedParams.id);
    console.log("details", details);
    setCar(details.car);
  };
  const { _id, title, image, rent } = (car as any) || {};

  const handleBooking = async (event: any) => {
    event.preventDefault();
    const carBooking = {
      email: data?.user?.email,
      name: event.target.name.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      serviceTitle: title,
      serviceID: _id,
      rent: rent,
    };

    const resp = await fetch(
      "http://localhost:3000/car-checkout/api/car-booking",
      {
        method: "POST",
        body: JSON.stringify(carBooking),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const response = await resp?.json();
    toast.success(response?.message);
    event.target.reset();
  };

  useEffect(() => {
    loadService();
  }, [params]);

  return (
    <div className="container mx-auto">
      {/* <ToastContainer/> */}
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={image || "/placeholder-image.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Checkout {title}
          </h1>
        </div>
      </div>
      {(!rent || rent < 0) && (
        <>
          {" "}
          <p className="flex items-center text-xl">
            Loading
            <span className="loading loading-dots loading-md"></span>
          </p>
        </>
      )}
      <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                placeholder="Your Name"
                type="text"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]}
                type="date"
                name="date"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={data?.user?.email}
                type="text"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                defaultValue={rent}
                readOnly
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
