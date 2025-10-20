import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NoticeBar from "./NoticeBar";
import ChampionsCardSlider from "./ChampionsCardlayout";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname === "/" && <NoticeBar />}
      <main>
         {pathname === "/" && <ChampionsCardSlider />}  {/* slider only on home */}
        <Outlet />
      </main>
    </>
  );
}
