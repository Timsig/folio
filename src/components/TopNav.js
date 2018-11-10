import React from "react";
import "../styles/site.scss";
import Link from "gatsby-link";

export default () => 
  <div className="topNav">
   <Link to="/"><nav className="homeLink">TS</nav></Link>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/portfolio/"
          activeClassName="active">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/about/"
          activeClassName="active">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact/"
          activeClassName="active">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
    

  </div>