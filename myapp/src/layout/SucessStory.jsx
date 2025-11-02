import SucessCard from "../Data/SucessCard.js"
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

function SuccessStory () {

   const [activeCard , setActiveCard] = useState(null);
    
    return (

     <div className="flex items-center pt-5 ">

        <div className="mr-3">

        <div className=" text-center lg:text-left lg:ml-64 mt-8 ">
            <img
            src="https://asset.allen.in/680dd762-6f2f-4216-8177-d15433891387/original.webp?__ar__=2.166667"
            alt="Success Stories"
            className="h-auto w-15"
          />
        </div>

        <div className="text-center lg:text-left lg:ml-64  mt-4 font-semibold text-xl">
             <h3>Success</h3>
             <h3>Stories</h3>
        </div>

        <div className="text-center lg:text-left lg:ml-64  mt-3 font-medium">
           <p>Students who </p>
           <p>inspire us !</p>
        </div>
        </div>


      <div className="flex justify-center mt-3">
      <div className="w-full max-w-[900px]">

        <Swiper
        

                  modules={[Mousewheel]}
                        
               slidesPerView={5}          
                mousewheel={{ forceToAxis: true, sensitivity: 4 , thresholdDelta: 1, thresholdTime: 0 }}
                speed={220}                   
                centeredSlides={false}

                loop={false}            
                resistanceRatio={0.3}    
                spaceBetween={14}

 


               cssMode={true}


                        
        >

      
      {SucessCard.map(card => (
     <SwiperSlide key={card.id} className="block w-full h-auto">
      <div className=" overflow-hidden shadow">
      <img onClick={()=>setActiveCard(card)} src={card.src} className="w-full h-auto" />
      </div>
      </SwiperSlide>

     ))}
      


        </Swiper>

      {activeCard && (
         <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center ">
         
            <div className="bg-black rounded-2xl shadow-2xl p-2  max-w-[600px] w-[90vw] relative">

             <button
            onClick={() => setActiveCard(null)}
            aria-label="Close"
            className=" rounded-full bg-black/70 text-white p-2 hover:bg-black focus:outline-none focus:ring-2 focus:ring-white/70 absolute -top-3 -right-3"
             >
             X
        </button>



            <div className=" rounded-xl  overflow-hidden aspect-video w-full "> 

             <video src={activeCard.video} 
             
             controls
             autoPlay
             muted
             playsInline
             className="w-full h-full object-cover "
             >

             </video>
            </div>
            </div>

            </div>
       
      )}


      </div>
      </div>   


        
    
     </div>

    );
}

export default SuccessStory