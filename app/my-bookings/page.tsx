"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Booking {
  _id: string;
  serviceTitle: string;
  price: number;
  date: string;
}

const page = () => {
  const session = useSession();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const loadData = async () => {
    const email = session?.data?.user?.email || "shahriyarmahbub55@gmail.com";
    console.log(email);

    try {
      const resp = await fetch(
        `https://car-showcase-three-henna.vercel.app/my-bookings/api/${email}`
      );
      const data = await resp.json();
      setBookings(data.myBookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const deleted = await fetch(
      `https://car-showcase-three-henna.vercel.app/my-bookings/api/booking/${id}`,
      {
        method: "DELETE",
      }
    );
    const resp: any = deleted.json();
    if (resp?.response?.deletedCount > 0) {
      toast.success("deleted successfully");
      loadData();
    }
  };

  useEffect(() => {
    if (session) {
      loadData();
    }
  }, [session]);

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(!bookings || bookings.length === 0) && (
                <tr>
                  <td colSpan={5} className="text-center">
                    <p className="flex items-center justify-center text-xl">
                      Loading
                      <span className="loading loading-dots loading-md ml-2"></span>
                    </p>
                  </td>
                </tr>
              )}
              {bookings?.map((book, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{book.serviceTitle}</td>
                  <td>{book.price}</td>
                  <td>{book.date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-bookings/update/${book._id}`}>
                        <button className="btn btn-primary text-white">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(book._id)}
                        className="btn btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
