import React from "react";
import styles from "../styles/topnav.module.scss";
import Link from "gatsby-link";

export default () => 
  <div className={styles.topNav}>
   <nav className={styles.homeLink}>
      <Link to="/" activeClassName={styles.active}>
        TS
      </Link>
    </nav>
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/portfolio/" activeClassName={styles.active}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName={styles.active}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName={styles.active}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
    

  </div>