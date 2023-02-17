import React from "react";
import { GrHome } from "react-icons/gr";
import { FaPencilRuler } from "react-icons/fa";
import { MdCable } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { BsCheck2Square } from "react-icons/bs";
import { BsHexagon } from "react-icons/bs";
import { TbBoxModel2 } from "react-icons/tb";
import { RiListCheck } from "react-icons/ri";
import { FaGripLinesVertical } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="flex flex-col items-start p-5 h-screen w-72">
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <GrHome size={20} />
        </span>
        Dashboard
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <FaPencilRuler size={20} />
        </span>
        Masters
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <MdCable />
        </span>
        Invite Code
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <AiOutlineClockCircle />
        </span>
        Waiting Lists
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <HiUsers />
        </span>
        Users
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <RiShoppingBasketLine />
        </span>
        Platforms
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <SlScreenDesktop />
        </span>
        Boarding Screens
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <BsCheck2Square />
        </span>
        Task Types
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <BsHexagon />
        </span>
        Retailers
      </div>
      <div className="flex flex-row mr-5 py-2">
        {" "}
        <span className="mr-3">
          <TbBoxModel2 />
        </span>
        Compaign Wizard
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <RiListCheck />
        </span>
        Compaigns
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <FaGripLinesVertical />
        </span>
        Reports
      </div>
    </div>
  );
};
export default SideBar;
