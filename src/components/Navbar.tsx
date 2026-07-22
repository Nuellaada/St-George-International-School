import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="topNavigation">
            <p className="logoText">SGIS</p>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navLinks ${isOpen ? "open" : ""}`}>
                <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About us</Link></li>
                <li><a href="#">Contact us</a></li>
                <li className="dropdown"><a href="#">Admissions</a>
                <ul className="dropdownMenu">
                    <li><a href="#">How to apply</a></li>
                    <li><a href="#">Requirements</a></li>
                    <li><a href="#">Tuition and Fees</a></li>
                </ul>
                </li>
                <li><button className="navButton">Login</button></li>
            </ul>

            {/* <button className="navButton">Log in</button>  */}
        </nav>
    );
}

export default Navbar;