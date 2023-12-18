"use client";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#07332F] m-8 p-6 lg:mx-60 lg:p-20 rounded-md text-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 ">
          {/* Left Side: Contact Us Text */}
          <div className="mb-2 sm:mb-0">
            <h3 className="text-3xl font-bold mb-4">Contact With Us</h3>
            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.
            </p>

            <div className="flex gap-4 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M25.3125 4.6875V10.3125M25.3125 4.6875H19.6875M25.3125 4.6875L17.8125 12.1875M21.5625 27.1875C11.2075 27.1875 2.8125 18.7925 2.8125 8.4375V5.625C2.8125 4.87908 3.10882 4.16371 3.63626 3.63626C4.16371 3.10882 4.87908 2.8125 5.625 2.8125H7.34C7.985 2.8125 8.5475 3.25125 8.70375 3.8775L10.0863 9.40625C10.2238 9.95625 10.0187 10.5337 9.565 10.8725L7.94875 12.085C7.71741 12.2525 7.54625 12.4901 7.46068 12.7626C7.37511 13.035 7.37969 13.3278 7.47375 13.5975C8.22609 15.6439 9.41426 17.5023 10.956 19.044C12.4977 20.5857 14.3561 21.7739 16.4025 22.5262C16.9537 22.7287 17.5625 22.5213 17.915 22.0513L19.1275 20.435C19.2935 20.2134 19.5211 20.0458 19.782 19.9531C20.0428 19.8604 20.3252 19.8467 20.5938 19.9137L26.1225 21.2963C26.7475 21.4525 27.1875 22.015 27.1875 22.66V24.375C27.1875 25.1209 26.8912 25.8363 26.3637 26.3637C25.8363 26.8912 25.1209 27.1875 24.375 27.1875H21.5625V27.1875Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>+88 01750 14 14 14</p>
            </div>

            <div className="flex mb-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M18.75 13.125C18.75 14.1196 18.3549 15.0734 17.6517 15.7767C16.9484 16.4799 15.9946 16.875 15 16.875C14.0054 16.875 13.0516 16.4799 12.3483 15.7767C11.6451 15.0734 11.25 14.1196 11.25 13.125C11.25 12.1304 11.6451 11.1766 12.3483 10.4733C13.0516 9.77009 14.0054 9.375 15 9.375C15.9946 9.375 16.9484 9.77009 17.6517 10.4733C18.3549 11.1766 18.75 12.1304 18.75 13.125V13.125Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.375 13.125C24.375 22.0525 15 27.1875 15 27.1875C15 27.1875 5.625 22.0525 5.625 13.125C5.625 10.6386 6.61272 8.25403 8.37087 6.49587C10.129 4.73772 12.5136 3.75 15 3.75C17.4864 3.75 19.871 4.73772 21.6291 6.49587C23.3873 8.25403 24.375 10.6386 24.375 13.125V13.125Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="w-full sm:w-auto">
            {/* Name and Email */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="mb-4 sm:mb-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[143D3A] text-[#FFFFFF]  rounded-lg px-3 py-3 w-full sm:w-auto"
                  />
                </div>
                <div className="mb-4 sm:mb-0">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[143D3A] text-[#FFFFFF]  rounded-lg px-3 py-3 w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Number and Doctor Name */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="mb-4 sm:mb-0">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="bg-[143D3A] text-[#FFFFFF] rounded-lg px-3 py-3 w-full sm:w-auto"
                  />
                </div>
                <div className="mb-4 sm:mb-0">
                  <input
                    type="text"
                    placeholder="Doctor Name"
                    className="bg-[143D3A] text-[#FFFFFF]  rounded-lg px-3 py-3 w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="mb-4 sm:mb-0">
                  <input
                    type="date"
                    placeholder="Date"
                    className="bg-[143D3A] text-[#FFFFFF] w-full lg:w-52  rounded-lg px-3 py-3"
                  />
                </div>
                <div className="mb-4 sm:mb-0">
                  <input
                    type="time"
                    placeholder="Time"
                    className="bg-[143D3A] text-[#FFFFFF] w-full lg:w-52  rounded-lg px-3 py-3"
                  />
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div>
              <button
                type="submit"
                className="px-3 py-3 rounded-lg w-full bg-[#F7A582] text-white font-semibold hover:bg-[#f0b59b]"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
