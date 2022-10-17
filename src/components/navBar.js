import React from "react";

import "../styles/NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      
      <div className="navBar my-3 ">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item ">
            <Link to="/" className="nav-link active" aria-current="page">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/filter" className="nav-link">
              Filter
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resultSearch" className="nav-link">
              Search result
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
