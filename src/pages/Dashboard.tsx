import SideBar from "@/app/components/FormComponents/SideBar";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex md:flex md:flex-grow flex-row justify-between space-x-1 bg-pink-300 w-full h-16 p-5">
        <div className="text-black font-bold text-2xl">Cuba</div>
        <div className="text-black font-bold text-2xl">Admin</div>
      </div>
      <div className="flex flex-col items-start bg-gray-300 w-72 h-full">
        <SideBar />
      </div>
    </div>
  );
};
export default Dashboard;
