import React from "react";
import { Link } from "react-router-dom";
import { ChampionsCard } from "../Data/ChampionsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
 import "swiper/css/pagination";
import "swiper/css";

 function ChampionsCardSlider(){
    return (
        
        <div className="bg-gray-100 h-[500px] flex items-center justify-center">
            <Swiper 
         modules={[Pagination]}
         slidesPerView={1}
         spaceBetween={20}
         centeredSlides={true}
         grabCursor={true}
         allowTouchMove={true}
         simulateTouch={true}
         pagination={{ clickable: true }}
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

    );
}

export default ChampionsCardSlider;