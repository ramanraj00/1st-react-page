import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NoticeBar from "./NoticeBar";
import ChampionsCardSlider from "./ChampionsCardlayout.jsx";
import PickHeader from "./PickHeader.jsx";
import CoursesCard from "./CourseCard.jsx";
import TrendingCourses from "./TrendingCourses.jsx";
import Slider from "./Slider.jsx";

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
        
        <Outlet />
      </main>
    </>
  );
}
