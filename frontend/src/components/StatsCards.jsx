import React from "react";

function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      
      {/* Total Transactions Card */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-black font-bold text-xl">Total Transactions</h3>
        <p className="text-3xl font-extrabold mt-4">{stats.totalTransactions}</p>
        <p className="mt-2 text-white/80 text-sm">All recent transactions counted</p>
      </div>

      {/* Total Credits Issued Card */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-black font-bold text-xl">Total Credits Issued</h3>
        <p className="text-3xl font-extrabold mt-4">{stats.totalCredits}</p>
        <p className="mt-2 text-white/80 text-sm">Credits issued to users</p>
      </div>

      {/* Last 10 Users Card */}
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-black font-bold text-xl">Last 10 Users</h3>
        <div className="mt-4 space-y-1">
          {stats.lastUsers.map((user, idx) => (
            <p key={idx} className="truncate hover:underline cursor-pointer">{user}</p>
          ))}
        </div>
        <p className="mt-2 text-white/80 text-sm">Most recent users</p>
      </div>

    </div>
  );
}

export default StatsCards;
