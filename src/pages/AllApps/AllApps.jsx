import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllApps = () => {

  const [apps, setApps] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("/apps.json")
      .then(res => res.json())
      .then(setApps)
  }, [])

  const filtered = apps
    .filter(app => app.title.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => {
      if (sort === "high-low") return b.downloads - a.downloads;
      if (sort === "low-high") return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className='p-5'>
      <h1 className='text-purple-700 text-xl md:text-5xl lg:text-5xl text-center font-bold mt-5'>Our All Applications</h1>
      <p className='text-gray-600 text-md md:text-lg lg-text-lg font-semibold mt-3 mb-8 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className='flex justify-between items-center mb-5 px-5'>
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
          filtered.map(app => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className='card bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'
            >
              <figure className='p-3'>
                <img className='rounded-2xl w-full h-full object-cover' src={app.image} alt="" />
              </figure>
              <div className='p-5 items-center'>
                <h3 className='text-lg font-semibold'>{app.title}</h3>
                <p className='text-gray-500 mt-2'>{app.companyName}</p>

                <div className='flex justify-between items-center mt-3 mb-3'>
                  <div className='flex gap-2'>
                    <img className='w-[21px]' src="/assets/icon-ratings.png" alt="" />
                    <span className='text-orange-500 font-bold text-[17px]'>{app.ratingAvg}</span>
                  </div>

                  <div className='flex gap-2'>
                    <img className='w-[21px]' src="/assets/icon-downloads.png" alt="" />
                    <span className='text-green-600 font-bold text-[17px]'>{(app.downloads / 100000).toFixed(1)}M</span>
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
