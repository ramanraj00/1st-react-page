import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Courses from "./components/courses.jsx";
import TestSeries from "./components/TestSeries.jsx";
import Classroom from "./components/Classroom.jsx";
import Result from "./components/Result.jsx";
import StudyMaterial from "./components/StudyMaterial.jsx";
import Scholarships from "./components/Scholarships.jsx";
import More from "./components/More.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Default homepage route */}
        <Route path="/" element={<Courses />} />

        <Route path="/Allen/Courses" element={<Courses />} />
        <Route path="/Allen/TestSeries" element={<TestSeries />} />
        <Route path="/Allen/ClassRoom" element={<Classroom />} />
        <Route path="/Allen/Result" element={<Result />} />
        <Route path="/Allen/StudyMaterial" element={<StudyMaterial />} />
        <Route path="/Allen/Scholarships" element={<Scholarships />} />
        <Route path="/Allen/More" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
