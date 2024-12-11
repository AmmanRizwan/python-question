import React from "react";
import { BsSend} from "react-icons/bs";


const CustomData = ({title, button_title, questionValue, codeValue, setSubmit, questionChange, codeChange}) => {


  return (
    <div className="text-white min-h-screen flex justify-center">
      <div className="w-5/6">


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
         <button type="submit" className="flex justify-center items-center gap-3 text-white py-3 px-7 bg-indigo-500 rounded-full text-xl mt-4 hover:bg-indigo-600 transition-all duration-500 active:bg-indigo-700">{button_title}<BsSend /></button>
        </form>
      </div>
    </div>
  )
}

export default CustomData;