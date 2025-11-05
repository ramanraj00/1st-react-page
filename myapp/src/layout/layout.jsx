import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NoticeBar from "./NoticeBar";
import ChampionsCardSlider from "./ChampionsCardlayout.jsx";
import PickHeader from "./PickHeader.jsx";
import CoursesCard from "./CourseCard.jsx";
import TrendingCourses from "./TrendingCourses.jsx";
import Slider from "./Slider.jsx";
import SliderCardTwo from "./SliderCardtwo.jsx";
import SuccessStory from "./SucessStory.jsx";
import Advantage  from "./AdvantageComponent.jsx";
import TestimonialCard from "./Testimonial.jsx";
import CallBackCard from "./CallBack.jsx"
import LinkCard from "./Link.jsx";
import Footer from "./footer.jsx";


export default function Layout() {
const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname === "/" && <NoticeBar />}
      <main>
         {pathname === "/" && <ChampionsCardSlider />}  

        {pathname === "/"  && <PickHeader/>}

        {pathname === "/" && <CoursesCard/>}

        {pathname === "/" && <TrendingCourses/>}

        {pathname === "/" && <Slider/>}

        {pathname === "/" && <SliderCardTwo/>}

        {pathname === "/" && <SuccessStory/>}

        {pathname === "/" && <Advantage/>}

        {pathname === "/" && <TestimonialCard/>}

        {pathname === "/" && <CallBackCard/>}

        {pathname === "/" && <LinkCard/>}

        {pathname === "/" && <Footer/>}

       
        
        <Outlet />
      </main>
    </>
  );
}
