
import { Link } from "react-router-dom";
import {CoursesData} from "../Data/CoursesData.js";

export default function CoursesCard (){

    const neet = CoursesData.find ((c)=>c.id === "neet")
    const jee = CoursesData.find((c)=>c.id === "jee") 
    const  class6to10 = CoursesData.find((c)=>c.id === "class6to10")

    return (

        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-32 mt-8 flex justify-center gap-8  ">


             <div className="bg-[#EAEFF7] w-80 rounded-lg relative overflow-hidden  min-h-[220px]">

       {/*Neet*/}
        <Link
        to={neet.path}
         className="block h-full"
       >


           <div className="px-6 pt-6 pb-12">
             <h1 className="font-sans font-semibold text-xl text-[#1a1a1a]">{neet.name}</h1 >
           </div>

            <div className="absolute bottom-4 left-6 text-blue-500 font-medium">{neet.label}</div>
            
            <img src={neet.src} alt="neet" className="absolute bottom-0 right-0 w-24 sm:w-28 md:w-32 pointer-events-none select-none loading=lazy "/>   

           
        </Link>

       </div>




        <div className="bg-[#EAEFF7] w-80 rounded-lg relative overflow-hidden  min-h-[220px]">

       {/*jee*/}

        <Link
        to={jee.path}
        className="block h-full"
        >
        
       <div className="px-6 pt-6 pb-12">
         <h1 className="font-sans font-semibold text-xl text-[#1a1a1a]">{jee.name}</h1>
       </div>

        <div className="absolute bottom-4 left-6 text-blue-500 font-medium">{jee.label}</div>
        <img src={jee.src} alt="jee" className="absolute bottom-0 right-0 w-24 sm:w-28 md:w-32 pointer-events-none select-none loading=lazy " />

        </Link>

        </div>





        <div className="bg-[#EAEFF7] w-80 rounded-lg relative overflow-hidden  min-h-[220px]">
        {/*Class6to8*/}


        <Link
        
        to={class6to10.path}
        className="block h-full"
             >

           <div className="px-6 pt-6 pb-12"> 
            <h1 className="font-sans font-semibold text-xl text-[#1a1a1a]">{class6to10.name}</h1>
           </div>

            <div className="absolute bottom-4 left-6 text-blue-500 font-medium">{class6to10.label}</div>

            <img src={class6to10.src} alt="class6to10"  className="absolute bottom-0 right-0 w-24 sm:w-28 md:w-32 pointer-events-none select-none loading=lazy"/>
        
        
        </Link>
        
        </div>



        </div>

    );



}