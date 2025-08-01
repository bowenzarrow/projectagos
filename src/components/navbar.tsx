import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div> 
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>  
            <Link to="/contact"> Contact</Link>  
            <Link to="/mission"> Mission</Link>
            <Link to="/support"> Support</Link>
            <Link to="/map"> Map</Link>
        </div>
    )
}