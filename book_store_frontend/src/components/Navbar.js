import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../imgs/book_logo4.jpg" 
export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          <img src={logo} alt="" width={30} height={30} style={{borderRadius:"70%"}} />
          Books
        </Link>
        <ul>
          <Link to="/book">Books</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
      </nav>
    </div>
  );
}
