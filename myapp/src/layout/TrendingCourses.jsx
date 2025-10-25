import { useState } from "react"

function TrendingCourses(){

    const [activeTab,setActiveTab] = useState("Neet");
    const tabs = [
    { id: "Neet", label: "NEET" },
    { id: "Jee", label: "JEE" },
    { id: "Class6-10", label: "Class 6-10" },
  ];


    return (

    <div className=" mt-8 bg-gray-100"> 

 <div >    <h1 className="ffont-sans font-semibold text-2xl text-[#1a1a1a] max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32">Trending Courses</h1>     </div>

        
      <div className=" flex gap-8  mt-4  max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32">
        <button onClick={()=>setActiveTab("Neet")} className=" border border-gray-500 rounded-xl w-17 h-10 font-sans font-semibold text-gray-800 text-sm">NEET</button>
        <button onClick={()=>setActiveTab("Jee")} className="border border-gray-500 rounded-xl w-17 h-10 font-sans font-semibold text-gray-800 text-sm">JEE</button>
        <button onClick={()=>setActiveTab("Class6-10")} className="border border-gray-500 rounded-xl w-28 h-10 font-sans font-semibold text-gray-800 text-sm">Class6-10</button>
      </div>

    </div>


    )
}

export default  TrendingCourses