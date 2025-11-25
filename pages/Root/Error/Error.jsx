import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f7fa] text-center px-4">
      <img
        className="w-[350px] mb-6"
        src="/assets/error-404.png"
        alt="404"
      />

      <h1 className="text-4xl font-bold text-gray-800">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mt-2">
        The page you are looking for is not available.
      </p>

      <Link to="/"><button className="mt-6 bg-[#6D5DFB] text-white px-6 py-2 rounded-md hover:bg-[#5848e6] transition">
        Go Back!
      </button></Link>
    </div>
  );
};

export default Error;

