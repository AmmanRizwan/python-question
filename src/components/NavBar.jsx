import React from "react";
import { VscAccount, VscArchive } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div className="text-white flex justify-between p-4 bg-indigo-700 items-center">
      <div className="cursor-pointer"><VscAccount size={24} /></div>
      <div className="font-medium text-md sm:text-xl">PYTHON TUTORIAL QUESTION</div>
      <div className="cursor-pointer"><VscArchive size={24} /></div>
    </div>
  )
}

export default NavBar;