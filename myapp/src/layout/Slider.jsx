import Sliderx from "../Data/Slide.js"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel } from "swiper/modules";
 import "swiper/css/pagination";
 import "swiper/css/mousewheel";
import "swiper/css";
function Slider () {

    return(

        <div className="">

            <div className=" mx-auto px-8 sm:px-12 md:px-20 lg:px-32  bg-[#EAEFF7] mt-8 pb-6">
            <img className="w-7xl" src="https://asset.allen.in/25601b8a-00e3-439e-9cb1-88e24e899f4b/original.png?__ar__=6.477733" alt="Proven Result in 2024  " />



            </div>

             <div className="flex justify-center mx-auto px-8 sm:px-12 md:px-20 lg:px-3 bg-[#EAEFF7] pt-8">
            <h3 className="font-semibold text-2xl">What's Trending</h3>
             </div>  




        <div className="bg-[#EAEFF7] h-[500px] flex items-center justify-center">
         <div className="w-full max-w-[1100px]">
                <Swiper 
                
                  modules={[Pagination,Mousewheel ]}
                         slidesPerView={1.2}
                         spaceBetween={10}
                         centeredSlides={true}
                         grabCursor={true}
                         allowTouchMove={true}
                         simulateTouch={true}
                         touchRatio={1.2}
                         touchAngle={45}
                         mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
                         pagination={{ clickable: true }}

                         freeModeMomentum={true}
                         freeModeMomentumRatio={0.8}
                         freeModeMomentumVelocityRatio={0.9}
                         speed={600}
                         autoHeight={true}
                >

             {Sliderx.map((card)=>(
                   
                   <SwiperSlide key={card.id} className="fflex items-center justify-center p-8">

                        <div className="flex justify-center items-center">
                            <img className="w-200 h-70" src={card.src} alt="" />
                        </div>

                    </SwiperSlide>

                ))}
                </Swiper>


               
            </div>
        </div>



        </div>


    )

   

        
    
}

export default Slider