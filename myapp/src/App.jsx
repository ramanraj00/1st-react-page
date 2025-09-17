
// Layouts
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar.jsx";
import NoticeBar from "./layout/NoticeBar.jsx";


// Pages
import Courses from "./pages/courses.jsx";
import TestSeries from "./pages/TestSeries.jsx";
import Classroom from "./pages/Classroom.jsx";
import Result from "./pages/Result.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import AllenEstore from "./pages/AllenEstore.jsx";
import More from "./pages/More.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <NoticeBar/>
      <Routes>
        {/* Default homepage route */}
        <Route path="/" element={<Courses />} />

        <Route path="/Allen/Courses" element={<Courses />} />
        <Route path="/Allen/TestSeries" element={<TestSeries />} />
        <Route path="/Allen/ClassRoom" element={<Classroom />} />
        <Route path="/Allen/Result" element={<Result />} />
        <Route path="/Allen/StudyMaterial" element={<StudyMaterial />} />
        <Route path="/Allen/Scholarships" element={<Scholarships />} />
         <Route path="/Allen/AllenEstore" element={<AllenEstore/>} />
        <Route path="/Allen/More" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
