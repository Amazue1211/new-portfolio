

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Hamburger from 'hamburger-react'

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },

    
  ];

  return (
    <>
    <ul className="sm: hidden md:flex  text-[20px] list-none justify-center font-semibold gap-[50px] mt-[20px] shadow pb-[10px]">
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-[#000046] hover:border-b-2 hover:border-[#000046]
              ${isActive ? "text-[#000046] border-b-2 border-[#000046]" : ""}`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    
    </ul>
    <div className="md:hidden sm: flex-1/12">
      <Hamburger />
    </div>
  </>
  );
  
}
