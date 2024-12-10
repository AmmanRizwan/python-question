import React, { useState } from "react";
import CustomData from '../components/CustomData';

const CreateData = () => {
  const [formData, setFormData] = useState({question: "", code: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://question-server-fpyn.onrender.com/api/userdata",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        });
        const result = res.json();
        setFormData({question: "", code: ""});

    }
    catch (err) {
      console.log("Error Posting Data");
    }
  }

  return (
    <CustomData title={"SEND AN ANSWER WITH QUESTION"} button_title={"Submit"} msg={"Send"} questionValue={formData.question} codeValue={formData.code} setSubmit={(e) => handleSubmit(e)} questionChange={(e) => setFormData({...formData, question: e.target.value})} codeChange={(e) => setFormData({...formData, code:e.target.value})} setClick={true}  />
  )
}

export default CreateData;