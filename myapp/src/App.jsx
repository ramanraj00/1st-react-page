import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import TestSeries from "./components/TestSeries";
import Classroom from "./components/Classroom";
import Result from "./components/Result";
import StudyMaterial from "./components/StudyMaterial";
import Scholarships from "./components/Scholarships";
import More from "./components/More";

function App() {

  return (

    <BrowserRouter>

    <Navbar/>

    <Routes>
     <Route path="/Allen/Courses" element={<Courses/>}></Route>
     <Route path="/Allen/TestSeries" element={<TestSeries/>}></Route>
    <Route path="/Allen/ClassRoom" element={<Classroom/>}></Route>
    <Route path="/Allen/Result" element={<Result/>}></Route>
    <Route path="/Allen/StudyMaterial" element={<StudyMaterial/>}></Route>
    <Route path="/Allen/Scholarships" element={<Scholarships/>}></Route>
    {/* <Route path="/Allen/Allenstore" element={<ALLENESTORE/>}></Route> */}
    <Route path="/Allen/More" element={<More/>}></Route>
     
    </Routes>
    </BrowserRouter>
  );
}
export default App
