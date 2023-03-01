import { Navbar } from "@/app/components/FormComponents/Navbar";
import React from "react";
import SideBar from "@/app/components/FormComponents/SideBar";
import { CgTikcode } from "react-icons/cg";

const Platform = () => {
  return (
    <div className="flex md:flex md:flex-grow flex-row justify-between items-center bg-white w-full h-16 p-5">
      <div className="text-black font-bold text-2xl mr-5 flex flex-row">
        Cuba
        <span className="ml-60">
          <CgTikcode size={30} />
        </span>
      </div>
      <div className="text-black font-bold text-2xl">Admin</div>

      {/* <Navbar /> */}
    </div>
  );
};
export default Platform;
