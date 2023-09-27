import { Navbar, NavItem, NavLink} from  "react-bootstrap";
import {Link } from "react-router-dom"
const Nav = () => {
    return(
        <Navbar>
            <NavItem>
                
        
                    <Link style={{color: "purple"}} to="/" className="nav-link">BikersApp</Link>
                    
                    
                  
            </NavItem>
        </Navbar>
    ) 
};

export default Nav