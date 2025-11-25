import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";

const Home = () => {
  return (
    <div >
      <div className='mt-5'>
        <h1 className='text-center items-center text-7xl font-bold'>We Build <br />
          <span className='text-purple-700'>Productive</span> Apps</h1>
        <p className='text-center items-center mt-3 p-3 text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className='flex flex-wrap justify-center mt-5 items-center'>
        <a href="https://play.google.com/store/games?hl=en"><button href="https://play.google.com/store/games?hl=en" className='btn text-white text-lg bg-linear-to-l from-purple-400 via-purple-500 to-purple-800 rounded-xl'><FaGooglePlay />Google Play</button></a>

        <a href="https://www.apple.com/app-store/"><button className='btn text-white text-lg mx-5 items-center bg-linear-to-l from-purple-400 via-purple-500 to-purple-800 rounded-xl'><FaAppStoreIos />App Store</button></a>
      </div>


      <div>
        <div className='px-3'>
          <img className='w-[550px] mt-8 mx-auto ' src="/assets/hero.png" alt="" />
        </div>

        <div className='p-8 bg-linear-to-l from-purple-600 via-purple-700 to-purple-800'>
          <h1 className='text-white text-center text-3xl md:text-4xl lg:text-4xl font-bold'>Trusted by Millions, Built for You</h1>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center p-5 mx-auto'>

            <div className='mt-5'>
              <p className='text-white  text-center text-sm md:text-lg lg:text-lg font-semibold'>Total Downloads</p>
              <h1 className='text-white mt-3 text-center text-5xl font-extrabold'>29.6M</h1>
              <p className='text-white mt-3 text-center text-sm md:text-lg lg:text-lg font-semibold'>21% more than last month</p>
            </div>

            <div className='mt-5'>
              <p className='text-white text-center text-sm md:text-lg lg:text-lg font-semibold'>Total Reviews</p>
              <h1 className='text-white mt-3 text-center text-5xl font-extrabold'>906K</h1>
              <p className='text-white mt-3 text-center text-sm md:text-lg lg:text-lg font-semibold'>46% more than last month</p>
            </div>

            <div className='mt-5'>
              <p className='text-white text-center text-sm md:text-lg lg:text-lg font-semibold'>Active Apps</p>
              <h1 className='text-white mt-3 text-center text-5xl font-extrabold'>132+</h1>
              <p className='text-white mt-3 text-center text-sm md:text-lg lg:text-lg font-semibold'>31 more will Launch</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;