import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {

  return <div>

    <BrowserRouter>
    
    <div style={{backgroundColor:'#ffffffff', color:"black",display:'flex',alignItems:"center",color:"#000",textDecoration:"none",padding: '0 20px',  margin: 0}}>
      <img src="Allen.png" alt="Allen Logo" style={{height:"100px",display:"block",marginRight:"20px"}} />
     
      <Link to="/Allen/Courses"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>Courses</Link>
      <Link to="/Allen/TestSeries"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>Test Series</Link>
      <Link to="/Allen/Classroom"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>Classroom</Link>
      <Link to="/Allen/Result"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>Result</Link>
      <Link to="/Allen/StudyMaterial"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>Study Material</Link>
      <Link to="/Allen/Scholarships"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>Scholarships</Link>
      <Link to="/Allen/Allenstore"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>ALLENESTORE</Link>
      <Link to="/Allen/More"  style={{ color: '#000', marginRight: '20px', fontWeight: 500, textDecoration: 'none' }}>More</Link>

    </div>

    <Routes>
     <Route path="/Allen/Courses" element={<Courses/>}></Route>
     <Route path="/Allen/TestSeries" element={<TestSeries/>}></Route>
    <Route path="/Allen/Classroom" element={<Classroom/>}></Route>
    <Route path="/Allen/Result" element={<Result/>}></Route>
    <Route path="/Allen/StudyMaterial" element={<StudyMaterial/>}></Route>
    <Route path="/Allen/Scholarships" element={<Scholarships/>}></Route>
    <Route path="/Allen/Allenstore" element={<ALLENESTORE/>}></Route>
    <Route path="/Allen/More" element={<More/>}></Route>
     
    </Routes>
    </BrowserRouter>
  </div>

}

function Courses(){
  return <div>
    Hello Course
  </div>

}

function TestSeries(){
  return <div>
      Hello TestSeries
  </div>
}

function Classroom(){
  return <div>
      Hello Classroom
  </div>
}

  function Result(){
  return <div>
     Hello Result
  </div>
}


  function StudyMaterial(){
  return <div>
     Hello StudyMAterial
  </div>
}


  function Scholarships(){
  return <div>
     Hello Scholarships
  </div>
}

  function ALLENESTORE(){
  return <div>
     Hello ALLENESTORE
  </div>
}

function More(){
  return<div>
    Hello More
  </div>
}


export default App
