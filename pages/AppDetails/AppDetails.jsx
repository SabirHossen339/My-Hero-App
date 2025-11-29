import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState([]);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apps.json")
      .then(res => res.json())
      .then(data => {
        // console.log("Loaded apps:", data);
        // console.log("URL id:", id);

        const foundApp = data.find(x => String(x.id) === String(id));
        setApp(foundApp);
        const installedList = JSON.parse(localStorage.getItem("installedApps") || "[]");
        setInstalled(installedList.includes(Number(id)));
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Handle App install
  const handleInstall = () => {
    const installedList = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!installedList.includes(app.id)) {
      installedList.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedList));
      setInstalled(true);
      toast.success("App installed successfully!");
    }
    else {
      toast.info("App already installed");
    }
  };

  // Chart Data
  const chartData = app.ratings
    ? app.ratings.map(r => ({ name: r.name, count: r.count })) : [];

  // Handle loading/Not found
  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!app) return <p className="text-center py-10">App Not Found</p>;
  return (
    <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-10'>

      <div className="col-span-1">
        <img
          src={app.image}
          alt={app.title}
          className="w-full  rounded-2xl shadow-lg object-cover"
        />
      </div>

      <div className="col-span-2">
        <h2 className="text-xl font-bold">{app.title}</h2>
        <p className="text-gray-500">{app.companyName}</p>

        <div className="mt-2 text-gray-600 text-lg">
          {app.size} MB • ⭐ {app.ratingAvg} • {app.reviews.toLocaleString()} reviews
          <br />
          📥 {app.downloads.toLocaleString()} downloads
        </div>



        <div className="mt-5">
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`btn px-6 py-2 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 ${installed
              ? "bg-linear-to-l from-purple-500 via-purple-600 to-purple-900 cursor-not-allowed text-white"
              : "bg-linear-to-l from-purple-400 via-purple-500 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-900 text-white"
              }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-3 text-lg">Ratings</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <defs>

                  <linearGradient id="purpleGradient" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="#6a0dad" /> {/* purple-800 */}
                  <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 */}
                  <stop offset="100%" stopColor="#c084fc" /> {/* purple-400 */}
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="count" fill="url(#purpleGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2 text-lg">Description</h3>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>

    </div>


    </div >
  );
};

export default AppDetails;