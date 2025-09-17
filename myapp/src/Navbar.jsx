import { Link } from "react-router-dom";
import { logo, navItems } from "../../Data/navItems";
import { buttons } from "../../Data/Navbarbuttons";
import { BusFrontIcon } from "lucide-react";





function Navbar() {
  return (

    // left logo

    <nav className="flex items-center h-16 px-4">

   <Link to="/">
      <img src={logo.src} alt={logo.alt} className="h-22 w-auto ml-4"/>
    </Link>

     {/* Middle Component */}


      <div className="flex items-center ml-6 space-x-7">
        
      {navItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          
        >
          {item.name}
        </Link>
      ))}
      </div>
    
        {/* End-Component */}


      <div className="flex  items-center space-x-4 ml-auto"> 
        {buttons.map((btn,index)=>{
          if (btn.path){
            return(
              <Link key={index} 
              to={btn.path}
              className="px-4 border-2 border-blue-600 text-black-600 rounded-full hover:bg-blue-50 font-medium >"
              >
                {btn.label}
              </Link>
            );
          }

          const Icon = btn.icon;
          return(
           <button key={index}
            onClick={btn.action}
            className="bg-blue-600 w-8 h-8 text-white rounded-full flex items-center justify-center"
            >
              <Icon className="w-4 h-4 bg-white-50 " />
           </button>
          );
        })}
      </div>


    </nav>

   
  );
}

export default Navbar;
