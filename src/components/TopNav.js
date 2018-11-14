import React from "react";
import "../styles/site.scss";
import Link from "gatsby-link";

export default () => 
  <div className="topNav">
   <nav className="homeLink">
      <Link to="/" activeClassName="active">
        TS
      </Link>
    </nav>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/portfolio/" activeClassName="active">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="active">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
    

  </div>