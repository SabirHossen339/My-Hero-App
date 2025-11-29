import React, { useEffect, useState } from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/public/apps.json")
      .then((res => res.json()))
      .then((data) => {
        console.log(data);
        setApps(data.slice(0, 8));
      })
      .catch(error => console.error(error))
  }, [])



  return (
    <div >
      {/* Banner Section */}
      <div className='mt-5'>
        <h1 className='text-center items-center text-7xl font-bold'>We Build <br />
          <span className='text-purple-700'>Productive</span> Apps</h1>
        <p className='text-center items-center mt-3 p-3 text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className='flex flex-wrap justify-center mt-5 items-center'>
        <a href="https://play.google.com/store/games?hl=en"><button className='btn text-white text-lg bg-linear-to-l from-purple-400 via-purple-500 to-purple-800  hover:from-purple-500 hover:via-purple-600 hover:to-purple-900 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'><FaGooglePlay />Google Play</button></a>

        <a href="https://www.apple.com/app-store/"><button className='btn text-white text-lg mx-5 items-center bg-linear-to-l from-purple-400 via-purple-500 to-purple-800  hover:from-purple-500 hover:via-purple-600 hover:to-purple-900 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'><FaAppStoreIos />App Store</button></a>
      </div>


      <div>
        <div className='px-3'>
          <img className='w-[550px] mt-8 mx-auto ' src="/public/assets/hero.png" alt="" />
        </div>

        <div className='p-8 bg-linear-to-l from-purple-600 via-purple-700 to-purple-800'>
          <h1 className='text-white text-center text-3xl md:text-4xl lg:text-4xl font-bold'>Trusted by Millions, Built for You</h1>

          <div className='flex flex-wrap gap-10 justify-center items-center p-5 mx-auto'>

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

      {/* Tranding apps section */}
      <section className='mx-auto px-4'>
        <div className='text-center mb-8 mt-8'>
          <h1 className='text-purple-700 text-4xl font-bold mb-2'>Trending Apps</h1>
          <p className='text-gray-500 font-semibold'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        {apps.length === 0 ? (
          <div className="text-center py-12">
            <span className="loading loading-infinity loading-4xl text-primary"></span>
            <p className='mt-4 text-primary tetx-2xl font-bold '>Loading......</p>
          </div>
        ) : (
          <div className='mb-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>
            {apps.map((app) => (
              <Link
                key={app.id}
                to={`/apps/${app.id}`}

                className='card bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'>
                <figure className='p-3'>
                  <img className='rounded-2xl w-full h-full object-cover' src={app.image} alt="" />
                </figure>
                <div className='p-5 items-center '>
                  <h3 className='text-lg font-semibold'>{app.title}</h3>
                  <p className='text-gray-500 mt-2'>{app.companyName}</p>
                  <div className='flex justify-between items-center mt-3 mb-3'>
                    <div className='flex gap-2'>
                      <span ><img className='w-[21px]' src="/public/assets/icon-ratings.png" alt="" /></span>
                      <span className='text-orange-500 font-bold text-[17px]'>{app.ratingAvg}</span>
                    </div>

                    <div className='flex gap-2'>
                      <span ><img className='w-[21px]' src="/public/assets/icon-downloads.png" alt="" /></span>
                      <span className='text-green-600 font-bold text-[17px]'>{(app.downloads / 100000).toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <div className='flex justify-center mt-5 mb-10'>
        <Link
          to="/apps"
          className='btn bg-linear-to-l from-purple-400 via-purple-500 to-purple-800  hover:from-purple-500 hover:via-purple-600 hover:to-purple-900 text-white text-lg rounded-xl mt-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'
        >
          Show All Apps
        </Link>
      </div>
    </div>
  );
};

export default Home;