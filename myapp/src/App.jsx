
// Layouts
import { BrowserRouter, Routes, Route, StaticRouterProvider } from "react-router-dom";
import Layout from "./layout/layout";



// Pages

import Courses from "./pages/courses.jsx";
import TestSeries from "./pages/TestSeries.jsx";
import Classroom from "./pages/Classroom.jsx";
import Result from "./pages/Result.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import AllenEstore from "./pages/AllenEstore.jsx";
import More from "./pages/More.jsx";
import CardPages1 from "./pages/CardPages1.jsx";
import CardPages2 from "./pages/CardPages2.jsx";
import CardPages3 from "./pages/CardPages3.jsx";
import CardPages4 from "./pages/CardPages4.jsx";
import CardPages5 from "./pages/CardPages5.jsx";
import Class6to10CoursesCard from "./pages/Class6to10CoursesCard.jsx";
import JeeCoursesCard from "./pages/JeeCoursesCard.jsx";
import NeetCoursesCard from "./pages/NeetCoursesCard.jsx";



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* Default homepage route */}
        <Route path="/" element={<Layout />} >
        <Route path="/Allen/Courses" element={<Courses />} />
        <Route path="/Allen/TestSeries" element={<TestSeries />} />
        <Route path="/Allen/ClassRoom" element={<Classroom />} />
        <Route path="/Allen/Result" element={<Result />} />
        <Route path="/Allen/StudyMaterial" element={<StudyMaterial />} />
        <Route path="/Allen/Scholarships" element={<Scholarships />} />
         <Route path="/Allen/AllenEstore" element={<AllenEstore/>} />
        <Route path="/Allen/More" element={<More />} />
        <Route path="/Allen/CardPages1" element={<CardPages1/>}/>
        <Route path="/Allen/CardPages2" element={<CardPages2/>}/>
        <Route path="/Allen/CardPages3" element={<CardPages3/>}/>
        <Route path="/Allen/CardPages4" element={<CardPages4/>}/>
        <Route path="/Allen/CardPages5" element={<CardPages5/>}/>
        <Route path="/Allen/Class6to10CoursesCard" element={<Class6to10CoursesCard/>}/>
        <Route path="/Allen/JeeCoursesCard" element={<JeeCoursesCard/>}/>
        <Route path="/Allen/NeetCoursesCard" element={<NeetCoursesCard/>}/>



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
