import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import Testimonial from "../Data/Testimonial.js"

function TestimonialCard () {
    return(

     

        <section className="p-4 relative [overscroll-behavior:contain]">

             <div className="ml-7">
               <h2 className="text-2xl font-semibold ">Testimonials from our students</h2>
            </div>

            
            <div className="mt-6"> {/* Outer div start  */}
             
             <div
              className="mt-6"
              onWheel={(e) => {
              if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();
             }}
            >
               <Swiper
               passiveListeners={false}
               modules={[Mousewheel]}
               slidesPerView={3.6}
               spaceBetween={14}
               speed={220}
               centeredSlides={false}
               loop={false}
               resistanceRatio={0} 
               roundLengths={true}              

               mousewheel={{
               enabled: true,
              forceToAxis: true,
              releaseOnEdges: false,   
              thresholdDelta: 10,      
              thresholdTime: 0,
              sensitivity: 0.6,
              }}

             simulateTouch={true}
            grabCursor={true}

            className="relative !overflow-visible transform-gpu will-change-transform"
    >

  {Testimonial.map(card => (
    <SwiperSlide key={card.id} className="relative !overflow-visible z-20 transform-gpu will-change-transform">
      
      <div className="relative pl-8">
    
        <img
          src={card.src}           
          alt=""
          className="absolute  -top-4 h-12 w-12 z-40 pointer-events-none drop-shadow-sm"
        />

       
        <div className="relative z-30 bg-[#EAEFF7] rounded-2xl p-6 h-full flex flex-col">
          <p className="mt-2 leading-6 line-clamp-6">{card.text}</p>

          <div className="mt-auto flex items-center gap-4 pt-6">
            <img src={card.icon} className="h-16 w-16 rounded-full object-cover" alt="" />
            <div>
              <h3 className="font-semibold text-lg">{card.name}</h3>
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
</div>
                </div> 
    
         </section>


    )
}

export default TestimonialCard