"use client";

import SwiperReview from "@app/Shared/SwiperReview";

const Review = () => {
  return (
    <div>

      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4 text-black">
          What Our Patients Says
        </h1>
        <p className="text-[#3B3A3A] text-base mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>

<SwiperReview/>


    </div>
  );
};

export default Review;
