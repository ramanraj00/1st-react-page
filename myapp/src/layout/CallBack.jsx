
import { useState } from "react";
import CallBackCardData from "../Data/CallBackData";

    const CallBackCard = () => {

    const [form,setForm] = useState(
       
        {
            FullName:"",
            Class:"",
            CoursePref:"",
            Mobile:"",
            goal:"",
            location:""
        }
    )

    const handleChanges = (e) => {

            const {name , value } = e.target;
           setForm(prev => ({...prev, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (

        <section className="bg-[#EAEFF7]  flex items-center justify-center p-14  mt-8">{/* Outer Section Start*/}

            <div className="">
                <img className="h-85" src="https://asset.allen.in/dccd40f4-6c9d-4d84-8dc5-287391ec51a2/original.webp?__ar__=0.981595" alt="" />
            </div>

        <form onSubmit={handleSubmit}  className="shadow-xl w-2xl  rounded-2xl p-6">

        <div className="mb-4">
            <p className="font-semibold text-2xl">Request a callback</p>
        </div>

            <div className="border-[0.5px] border-white mb-3"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
        {CallBackCardData.map((c)=>(
            <div key={c.name}  className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">{c.title}</label>
                <input
                name = {c.name}
                value = {form[c.name]}
                onChange={handleChanges}
                placeholder={c.placeholder}
                type="text"
                
                  className="border-2 border-gray-300 rounded-lg h-12 w-70 bg-white px-3
                           hover:border-black focus:border-gray-300 focus:outline-none transition"        
                />      
            </div>
        ))}

        </div>

            <div className="flex justify-center items-center mt-4">
                 <p className="font-extralight text-sm">By continuing, you agree to our </p>
                 <p  className="font-light text-sm underline decoration-1">Terms & Conditions</p>
            </div>

        <div className="flex justify-center items-center">
        <button 
        type="submit"
          className="mt-6 w-full md:w-50  px-5 h-11 rounded-3xl bg-blue-600 text-white font-semibold
          cursor-grab active:cursor-grabbing hover:opacity-90 transition "
        >    Submit
        </button >
        </div>

        </form>
            
       </section>

    )
}

export default CallBackCard;