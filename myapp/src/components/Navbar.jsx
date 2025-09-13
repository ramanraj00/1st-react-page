import { Link } from "react-router-dom";
import {logo,navItems} from "../../Data/navItems"; 

function Navbar() {
  return (
    <nav className="flex  items-center space-x-7 h-16">

   <Link to="/">
      <img src={logo.src} alt={logo.alt} className="h-22 w-auto ml-4"/>
    </Link>

      {navItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
