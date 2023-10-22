// pages/404.js
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white text-center p-24">
        <h1 className="text-3xl text-black font-bold">Sorry,</h1>
        <p className="text-[#6C6B6B] font-semibold mt-3">This page is not found.</p>
        <div className="flex justify-center">
          <img className="w-1/2 mt-6" src="/404.8ad1f83e.svg" alt="" />
        </div>
        <Link href="/">
          <span className="text-white bg-[#FFC143] rounded-md px-10 py-3 mt-6">Back to home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
