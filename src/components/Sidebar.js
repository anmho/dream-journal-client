import React from "react";
import { IoIosSettings } from "react-icons/io";
import UserService from "../services/user";

export default function Sidebar({ setLoggedIn }) {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-1/6 bg-gradient-to-t from-[#6C27A2] to-[#01002C] z-50">
        <div className="flex flex-row align-center justify-center w-full h-content p-4">
          <div className="h-10 flex flex-row align-center justify-center">
            <p className="text-3xl font-bold text-white mr-4">Settings</p>

            <IoIosSettings size={30} className="text-white h-full" />
          </div>
        </div>
        <div className="flex align-center justify-center">
          <button
            className="text-3xl text-white bg-sky-400 rounded-full py-2 px-4 hover:cursor-pointer"
            onClick={() => {
              UserService.logout();
              setLoggedIn(false);
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
