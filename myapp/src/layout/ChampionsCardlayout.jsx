import React from "react";
import { Link } from "react-router-dom";
import { ChampionsCard } from "../Data/ChampionsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel } from "swiper/modules";
 import "swiper/css/pagination";
 import "swiper/css/mousewheel";
import "swiper/css";

 function ChampionsCardSlider(){
    return (
        
        <div className="bg-gray-100 h-[500px] flex items-center justify-center">
             <div className="w-full max-w-[1100px]">
            <Swiper 
           // onSwiper={(s) => (window.__sw = s)} to check everthing is true check in console
         modules={[Pagination,Mousewheel ]}
         slidesPerView={1.1}
         spaceBetween={10}
         centeredSlides={true}
         grabCursor={true}
         allowTouchMove={true}
         simulateTouch={true}
         touchRatio={1.2}
         touchAngle={45}
         mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
         pagination={{ clickable: true }}
         
       
         // smoothness
         
freeModeMomentum={true}
freeModeMomentumRatio={0.8}
freeModeMomentumVelocityRatio={0.9}
speed={600}
autoHeight={true}




         >

            {ChampionsCard.map((card)=>(
            <SwiperSlide key={card.id} className="flex items-center justify-center p-8">
              <div className="flex justify-center items-center">
                <Link to ={card.path}>
               <img src={card.src} alt={card.alt} className="w-250 h-84"/>
                </Link>
                 </div>

                <p>{card.alt}</p>
                </SwiperSlide>
        ))}
      </Swiper>
       </div>
            </div>
        

    );
}

export default ChampionsCardSlider;