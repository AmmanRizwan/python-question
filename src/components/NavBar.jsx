import React from "react";
import { BiSend } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { VscAccount, VscArchive } from "react-icons/vsc";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-white flex justify-between p-4 px-5  bg-indigo-700 items-center">
      <Link to={'/user'}><div className="cursor-pointer"><VscAccount size={24} /></div></Link>
      <Link to={'/'}><div className="font-medium text-md sm:text-xl">PYTHON TUTORIAL QUESTION</div></Link>
      <Link to={'/senddata'}><div className="cursor-pointer"><BsSend size={24} /></div></Link>
    </div>
  )
}

export default NavBar;