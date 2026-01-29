import { Link } from "react-router-dom";
import "./Navbar.css"
import Home from "../Home/Home";
function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <Link to="/home">home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                <Link to="/departments">Departments</Link>
                <Link to="/Login">Login</Link>
                <Link to="/register">register</Link>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;

