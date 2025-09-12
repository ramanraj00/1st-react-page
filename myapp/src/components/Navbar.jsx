import {Link} from "react-router-dom"
import navItems from "../data/navItems"




function Navbar(){
    return (
        <nav>
            {navItems.map((item,index) => (
                <Link key={index} to={item.path} style={{margin:"0 10px"}}>
                    {item.name}
                    </Link>
            ))}
        </nav>
    );
}

export default Navbar;