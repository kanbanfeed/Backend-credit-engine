import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <div className="text-gray-600">Profile</div>
        <UserCircleIcon className="w-8 h-8 text-gray-600" />
      </div>
    </div>
  );
}

export default Header;
