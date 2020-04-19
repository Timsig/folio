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

  componentDidMount() {
    this.setState({
      currentPage: this.props.data.curPage
    })
  }

  render (){
    
    return(
      <React.Fragment>
        <ContextConsumer>
          {({ data }) => {
            
          }}
        </ContextConsumer>
        <div className={styles.topNav}>
          <div className={styles.homeLinkWrap}>
            <nav className={styles.homeLink}>
              <Link to="/" activeClassName={styles.active}>
                TS
                </Link>
            </nav>
            <div className={styles.menuBarIcons} id={styles[this.props.data.curPage]}>
              <div className={styles.yellow}></div>
              <div className={styles.blue}></div>
              <div className={styles.magenta}></div>
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
      </ React.Fragment>
    )
  }
}

const TopnavWrap = () => (
  <ContextConsumer>
    {({ data }) => (
      <Topnav data={data}  />
    )}
  </ContextConsumer>
)

export default TopnavWrap;