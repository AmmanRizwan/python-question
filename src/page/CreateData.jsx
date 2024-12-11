import React, { useState } from "react";
import CustomData from '../components/CustomData';
import { CgClose } from "react-icons/cg";

const CreateData = () => {
  const [formData, setFormData] = useState({question: "", code: ""});
  const [popUp, setPopUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://question-server-fpyn.onrender.com/api/data",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        });
        const result = await res.json();
        setFormData({question: "", code: ""});
        setPopUp(true);
    }
    catch (err) {
      console.log("Error Posting Data");
    }
  }

  return (
    <>
    <CustomData title={"SEND AN ANSWER WITH QUESTION"} button_title={"Submit"} questionValue={formData.question} codeValue={formData.code} setSubmit={(e) => handleSubmit(e)} questionChange={(e) => setFormData({...formData, question: e.target.value})} codeChange={(e) => setFormData({...formData, code:e.target.value})}  />
    {popUp ? <div className="flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl">
        <div>
          <div className="flex gap-5 items-center text-violet-500 bg-white py-4 px-6 rounded-xl font-medium text-xl">Code Save Successfully!!<CgClose onClick={() => setPopUp(false)} className="text-red-500 font-bold cursor-pointer hover:text-red-700 hover:bg-slate-300 transition-all duration-500 rounded-full py-3 px-3 " size={50} /></div>
        </div>
      </div> : null
      }
    </>
  )
}

export default CreateData;