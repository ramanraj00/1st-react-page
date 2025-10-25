import { useState } from "react"

function TrendingCourses(){

    const [activeTab,setActiveTab] = useState("Neet");
    const tabs = [
    { id: "Neet", label: "NEET" },
    { id: "Jee", label: "JEE" },
    { id: "Class6-10", label: "Class 6-10" },
  ]

  const baseBtn =
    "px-6 py-2 rounded-xl border transition-all duration-200 font-sans font-semibold text-sm focus:outline-none ";


    return (

    <div className=" mt-8 bg-gray-100"> 

        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32 pt-4 "> 
       <h1 className="font-sans font-semibold text-2xl text-[#1a1a1a]">Trending Courses</h1>
        </div>

       <div className="flex gap-8  mt-4  max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32">
        {tabs.map((tab)=> {
            
            const isActive = tab.id === activeTab;

            const activeClasses =   "bg-blue-100/50 backdrop-blur-md border-blue-500 text-gray-900 shadow-[0_4px_20px_rgba(0,0,255,0.1)]"

            const inactiveClasses =
            "bg-white border-gray-300 text-gray-800 hover:border-blue-400 hover:shadow-sm"

            return (
                <button 
                
                key={tab.id}
                onClick={()=>setActiveTab(tab.id)}
                className={`${baseBtn} ${isActive?activeClasses:inactiveClasses}`}
                
                >
                     {tab.label}
                </button>
            );

        })}
       </div>

    </div>


    );
}

export default  TrendingCourses