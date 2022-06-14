import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show_user" className="nav-link">
        Show user
      </Link>
      <Link to="/add_user" className="nav-link">
        Add user
      </Link>
    </nav>
  );
}
