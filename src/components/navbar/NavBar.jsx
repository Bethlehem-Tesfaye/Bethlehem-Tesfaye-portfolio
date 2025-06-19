import { useState } from "react";
import { FaBars } from "react-icons/fa";
import './navbar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navContainer'>
      <div className="portfolio">
        <p>Bethlehem</p>
      </div>
      
      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#exp">Experience</a></li>
          <li><a href="#prj">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>
    </div>
  );
}

export default NavBar;
