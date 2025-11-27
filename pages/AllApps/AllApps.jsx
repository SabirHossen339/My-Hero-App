import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllApps = () => {

  const [apps, setApps] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("/public/apps.json")
      .then(res => res.json())
      .then(setApps)
  }, [])

  const filtered = apps
    .filter(apps => apps.title.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => {
      if (sort === "high-low")
        return b.downloads - a.downloads;
      if (sort === "low-high")
        return a.downloads - b.downloads;
      return 0;
    })

  return (
    <div className='p-5'>
      <h1 className='text-purple-700 text-xl md:text-4xl lg-text-4xl text-center font-bold mt-5'>Our All Applications</h1>
      <p className='text-gray-600 text-md md:text-lg lg-text-lg font-semibold mt-3 mb-8 text-center '>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='flex justify-between items-center mb-5'>
        <div className='text-purple-700 text-lg md:text-xl lg-text-xl font-bold'>{filtered.length} Apps Found</div>

        <div className='flex gap-2 items-center'>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder='Search Apps...' className='input rounded-xl' />
          <select value={sort} onChange={e => setSort(e.target.value)} className='select rounded-xl'>
            <option value="">Sort By</option>
            <option value="high-low">High-low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      <div className='mb-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>
        {filtered.length === 0 ? (
          <div className='col-span-full text-center p-5 text-purple-700 font-bold text-xl'>
            No App Found
          </div>
        ) : (
          filtered.map(apps => (
            <Link key={apps.id} to={'/apps/${apps.id}'} className='card  bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'>
              <figure className='p-3'>
                <img className='rounded-2xl w-full h-full object-cover' src={apps.image} alt="" />
              </figure>
              <div className='p-5 items-center '>
                <h3 className='text-lg font-semibold'>{apps.title}</h3>
                <p className='text-gray-500 mt-2'>{apps.companyName}</p>
                <div className='flex justify-between items-center mt-3 mb-3'>
                  <div className='flex gap-2'>
                    <span ><img className='w-[21px]' src="/assets/icon-ratings.png" alt="" /></span>
                    <span className='text-orange-500 font-bold text-[17px]'>{apps.ratingAvg}</span>
                  </div>

                  <div className='flex gap-2'>
                    <span ><img className='w-[21px]' src="/assets/icon-downloads.png" alt="" /></span>
                    <span className='text-green-600 font-bold text-[17px]'>{(apps.downloads / 100000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllApps;