
import Navbar from "./components/Navbar";

function App(){
    
    return <div>
        <Navbar/>
    </div>
}


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

export default App;