import React from "react";
import styles from "../styles/topnav.module.scss";
import Link from "gatsby-link";
import ContextConsumer from "./Context.js";

class Topnav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: "home"
    }
  }

  render (){
    
    return(
      <React.Fragment>
        <ContextConsumer>
          {({ data }) => {
            console.log(data.curPage);//set component state here
          }}
        </ContextConsumer>
        <div className={styles.topNav}>
          <div className={styles.homeLinkWrap}>
            <nav className={styles.homeLink}>
              <Link to="/" activeClassName={styles.active}>
                TS
              </Link>
            </nav>
            <div className={styles.menuBarIcons}>

            </div>
          </div>
          <nav className={styles.menu}>
            <ul>
              <li >
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
      </React.Fragment>
    )
  }
}

export default Topnav;