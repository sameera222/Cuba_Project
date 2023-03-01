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
import Link from "next/link";

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

        <Link href="/InviteCode">Invite Codes</Link>
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <AiOutlineClockCircle />
        </span>

        <Link href="/WaitingLists">Waiting Lists</Link>
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <HiUsers />
        </span>

        <Link href="/Users">Users</Link>
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <RiShoppingBasketLine />
        </span>

        <Link href="/Platform">Platform</Link>
      </div>
      <div className="flex flex-row mr-5 py-2">
        <span className="mr-3">
          <SlScreenDesktop />
        </span>

        <Link href="/BoardingScreens">Boarding Screens</Link>
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

        <Link href="/Retailers">Retailers</Link>
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
