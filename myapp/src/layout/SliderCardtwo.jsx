import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel, Autoplay } from "swiper/modules";
 import "swiper/css/pagination";
 import "swiper/css/free-mode";
import "swiper/css";
import  {CourseCardTwo} from "../Data/SlideCardtwo"

function SliderCardTwo(){

    return(

        <div className="pt-6 pb-5 ">

          

             <div className="flex justify-center mt-3 ">
            <h2 className="text-2xl font-semibold ">Meet Our 2024 Champions</h2>
            </div>

          
        <Swiper
          
                  modules={[Pagination,Mousewheel,Autoplay ]}
                         slidesPerView={1}
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
                         speed={800}
                         autoHeight={true}

                          autoplay ={{
                          delay: 2500,         
                          disableOnInteraction: false, 
                          pauseOnMouseEnter: true,
                          }}
        >



            {CourseCardTwo.map((Card)=>(

                <SwiperSlide>
               <div className="h-[400px] flex items-center justify-center"> 
                 <img className="h-80 min-w-9/12" src={Card.src} alt="" />
               </div>
                </SwiperSlide>
                
            ))}



        </Swiper>
           </div>
         

       

    );

}

export default SliderCardTwo
