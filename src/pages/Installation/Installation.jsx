import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(ids);
    fetch("/apps.json") // ensure apps.json is in public folder
      .then(r => r.json())
      .then(setAllApps);
  }, []);

  const uninstall = (id) => {
    const newList = installedApps.filter(i => i !== id);
    localStorage.setItem("installedApps", JSON.stringify(newList));
    setInstalledApps(newList);
    toast.info("App removed");
  };

  const installedDetails = allApps.filter(a => installedApps.includes(a.id));

  if (!allApps.length) return <p className="text-center py-10">Loading apps...</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Your Installed Apps</h2>
      {installedDetails.length === 0 ? (
        <div className="text-gray-500 flex justify-center mb-17 mt-5"><img src="/public/assets/App-Error.png" alt="" /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {installedDetails.map(app => (
            <div className="card p-4 w-[250px] rounded-lg shadow-md" key={app.id}>
              <img src={app.image} alt={app.title} className="w-[250px] h-full object-cover rounded" />
              <h3 className="font-semibold mt-2">{app.title}</h3>
              <div className="mt-2 flex gap-2">
                <Link
                  to={`/apps/${app.id}`}
                  className="btn btn-sm bg-linear-to-l from-purple-400 via-purple-500 to-purple-800  hover:from-purple-500 hover:via-purple-600 hover:to-purple-900 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-white"
                >
                  View
                </Link>
                <button
                  onClick={() => uninstall(app.id)}
                  className="btn btn-sm shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
