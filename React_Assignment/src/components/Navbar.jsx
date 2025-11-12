import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">Travel Planner Lite</h2>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>    
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/destinations"
            className={location.pathname === "/destinations" ? "active" : ""}
          >
            Destinations
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/packing"
            className={location.pathname === "/packing" ? "active" : ""}
          >
            Packing List
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

