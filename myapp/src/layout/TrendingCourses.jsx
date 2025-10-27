import { useState } from "react"
import TrendigCoursesData from "../Data/TrendingCourses.js";

function TrendingCourses(){

    const [activeTab,setActiveTab] = useState("Neet");
    const tabs = [
    { id: "Neet", label: "NEET" },
    { id: "Jee", label: "JEE" },
    { id: "Class6-10", label: "Class 6-10" },
  ]

  const baseBtn =
    "px-6 py-2 rounded-xl border transition-all duration-200 font-sans font-semibold text-sm focus:outline-none ";

const selectedCourse = TrendigCoursesData.find((course) => course.id === activeTab);
let cardsArray = [];
if (selectedCourse) {
  const arrEntry = Object.entries(selectedCourse).find(([k,v]) => Array.isArray(v));
  cardsArray = arrEntry ? arrEntry[1] : [];
}


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
  
         
<div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32 mt-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {cardsArray.map((card, idx) => {
 
      const featureList = Array.isArray(card.feature)
        ? card.feature
        : Array.isArray(card.features)
        ? card.features
        : [];

     
      const key = card.id ? `${activeTab}-${card.id}` : `${activeTab}-${card.title ?? idx}`;

      return (

       <div>

        {/*card*/}
         <div
          key={key}
          className="relative h-full flex flex-col justify-between p-6 bg-white rounded-2xl border shadow-sm "
        >
     
          <div className="flex items-start justify-between mb-3">
            {card.tag && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs rounded-full">
                {card.tag}
              </span>
            )}
            {card.badge && (
              <span className="text-xs font-semibold text-white bg-orange-500 px-3 py-1 rounded-full">
                {card.badge}
              </span>
            )}
          </div>

       
          <div>
            {card.title && <h2 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h2>}
            {card.desc && <p className="text-sm text-gray-600 mb-4">{card.desc}</p>}
          </div>

   
          {featureList.length > 0 && (
            <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-2">
              {featureList.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}


          <div className="flex items-center justify-between mt-4">
            <div className="text-xl font-bold text-gray-900">{card.price}</div>
            <button className="text-blue-600 font-medium">{card.label}</button>
          </div>
        </div>
     
       </div>

      );
    })}

    
 
  </div>
</div>

 <div className="text-center mt-8 flex justify-center items-center ">
    <button className="border rounded-4xl px-6 py-2 bg-blue-600 text-gray-200 font-semibold text-sm hover:bg-blue-700 transition w-48 h-13 mb-6">
      View All {activeTab} Courses
    </button>
  </div>

    </div>


    );
}

export default  TrendingCourses