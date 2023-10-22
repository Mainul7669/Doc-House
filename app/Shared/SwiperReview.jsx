"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CusromArrows";

const SwiperReview = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true, // Show arrows
    prevArrow: <CustomPrevArrow />, // Custom left arrow component
    nextArrow: <CustomNextArrow />, // Custom right arrow component
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <Slider {...settings} className="mx-4 lg:mx-[230px] pb-4">
        {/* Slide 1 */}

        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Awlad Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Product Designer</p>
                </div>
              </div>

              <img
                src="/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="/Ellipse 2 (1).png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                  Farhana Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Brand Designer</p>
                </div>
              </div>

              <img
                src="/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Awlad Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Product Designer</p>
                </div>
              </div>

              <img
                src="/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center ">
                {/* Image */}
                <img
                  src="/Ellipse 2.png"
                  alt="Card Image"
                  width="40px"
                  height="40px"
                  className="mr-4"
                />

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Awlad Hossain
                  </h2>
                  <p className="text-[#6C6B6B] text-sm">Product Designer</p>
                </div>
              </div>

              <img
                src="/Group 17.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />
            </div>

            {/* Paragraph */}
            <p className="text-[#6C6B6B] mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknow printer tool a galley of type and
              scrambled it to make type specimen book has survived not only five
              centurines.
            </p>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SwiperReview;
