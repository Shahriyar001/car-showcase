import Image from "next/image";

const Review = ({ review }: any) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image src={img} alt="image" width={40} height={40} />
            </div>
          </div>
          <div>
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
