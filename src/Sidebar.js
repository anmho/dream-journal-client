import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

export default function Sidebar() {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-1/6 bg-gradient-to-t from-[#6C27A2] to-[#01002C]">
        <div className="flex flex-row align-center justify-center w-full h-content p-4">
          <div className="h-10 flex flex-row align-center justify-center">
            <p className="text-3xl font-bold text-white mr-4">Settings</p>

            <IoSettingsSharp size={30} className="text-white h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
