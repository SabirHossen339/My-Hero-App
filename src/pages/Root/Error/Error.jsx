import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f7fa] text-center px-4">
      <img
        className="w-[350px] mb-6"
        src="/public/assets/error-404.png"
        alt="404"
      />

      <h1 className="text-4xl font-bold text-gray-800">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mt-2">
        The page you are looking for is not available.
      </p>

      <Link to="/"><button className="btn mt-6 bg-linear-to-l from-purple-400 via-purple-500 to-purple-800 text-white px-6 py-2 rounded-xl hover:bg-[#5848e6] transition text-lg font-semibold shadow-xl hover:shadow-2xl  hover:-translate-y-1">
        Go Back!
      </button></Link>
    </div>
  );
};

export default Error;

