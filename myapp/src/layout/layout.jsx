import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NoticeBar from "./NoticeBar";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname === "/" && <NoticeBar />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
