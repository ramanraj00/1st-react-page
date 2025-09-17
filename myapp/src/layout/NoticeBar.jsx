import { Link } from "react-router-dom";
import { notice } from "../Data/Notice.js";
import { useState, useEffect } from "react";




function NoticeBar() { 

const[noti,setNoti] = useState(0);

useEffect(()=>{
  const interval = setInterval (()=>{
      setNoti(prev => (prev + 1) % notice.length);
  },10000);

  return () => clearInterval(interval)

},[])
  
return (
  <div className="bg-grid text-white p-2 text-center">
    {notice[noti].text}
  </div>
);

}

export default NoticeBar;
