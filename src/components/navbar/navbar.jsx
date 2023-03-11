import React from "react";
import { Link } from "react-router-dom";
import { Play, House } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link> Import </Link>
        <Link> Export </Link>

        <Link to="/">
          <House size={32} />
        </Link>

        <Link> ADD SHOP </Link>
        
        <Link to="/results"> Results </Link>
        
        <Link>
          <Play size={32} />
        </Link>
      
      </div>
    </div>
  );
};
