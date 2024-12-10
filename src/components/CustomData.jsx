import React, { useState } from "react";
import { BsSend} from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const CustomData = ({title, button_title, msg, questionValue, codeValue, setSubmit, questionChange, codeChange, setClick}) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="text-white min-h-screen flex justify-center">
      <div className="w-5/6">

      {popUp ? <div className="flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl">
        <div>
          <div className="flex gap-5 items-center text-violet-500 bg-white py-4 px-6 rounded-xl font-medium text-xl">Code { msg } Successfully!!<CgClose onClick={() => setPopUp(false)} className="text-red-500 font-bold cursor-pointer hover:text-red-700 hover:bg-slate-300 transition-all duration-500 rounded-full py-3 px-3 " size={50} /></div>
        </div>
      </div> : null
      }
      <div className="text-xl sm:text-3xl text-center py-4 font-bold">{title}</div>
        <form onSubmit={setSubmit}>
          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Question:</label>
            <input type="text" value={questionValue} onChange={questionChange} placeholder="Enter the Question" className="bg-slate-700 text-[#00ff00] pl-4 rounded-xl text-xl sm:text-2xl py-3 border-0 outline-none focus:outline-[#00ff00] focus:border-none"  />
          </div>

          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Code:</label>
            <textarea type="text" value={codeValue} onChange={codeChange} placeholder="Enter the Code" className="bg-slate-700 text-[#00ff00] pl-4 rounded-xl text-xl sm:text-2xl py-3 h-96 border-0 outline-none focus:outline-none focus:outline-[#00ff00] focus:border-none" />
          </div>
         <button type="submit" onClick={() => setPopUp(setClick)} className="flex justify-center items-center gap-3 text-white py-3 px-7 bg-indigo-500 rounded-full text-xl mt-4 hover:bg-indigo-600 transition-all duration-500 active:bg-indigo-700">{button_title}<BsSend /></button>
        </form>
      </div>
    </div>
  )
}

export default CustomData;