import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-6 flex flex-col">
      <h1 className="text-xl font-bold mb-6">Universal Credit Engine</h1>
      <nav className="flex flex-col gap-3">
        <button className="text-left px-4 py-2 rounded hover:bg-blue-100">Dashboard</button>
        <button className="text-left px-4 py-2 rounded hover:bg-blue-100">Transactions</button>
        <button className="text-left px-4 py-2 rounded hover:bg-blue-100">Users</button>
        <button className="text-left px-4 py-2 rounded hover:bg-blue-100">Settings</button>
      </nav>
      <div className="mt-auto">
        <button className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
