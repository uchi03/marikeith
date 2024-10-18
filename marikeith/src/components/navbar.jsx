import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://res.cloudinary.com/drbddpumg/image/upload/v1723907011/430896684_797271905762500_2817897021034405738_n_-_Copy_owfpwb.jpg" alt="Logo" />
      </div>
      <div className="links">
        <Link to="/"> HOME </Link>
        <Link to="/bags"> BAGS </Link>
        <Link to="/perfumes"> PERFUMES </Link>
        <Link to="/about"> ABOUT US</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};