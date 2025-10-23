import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NoticeBar from "./NoticeBar";
import ChampionsCardSlider from "./ChampionsCardlayout.jsx";
import PickHeader from "./PickHeader.jsx";



export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname === "/" && <NoticeBar />}
      <main>
         {pathname === "/" && <ChampionsCardSlider />}  

        {pathname === "/"  && <PickHeader/>}
        
        <Outlet />
      </main>
    </>
  );
}
