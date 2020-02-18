import React from "react";
// import styles from "../styles/topnav.module.scss";
import "../styles/topnav.scss"
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
        <div className="topNav">
          <div className="homeLinkWrap">
            <nav className="homeLink">
              <Link to="/" activeClassName="active">
                TS
                </Link>
            </nav>
            <div className="menuBarIcons" id={this.props.data.curPage}>
              <div className="yellow"></div>
              <div className="blue"></div>
              <div className="magenta"></div>
            </div>
          </div>
          <nav className="menu">
            <ul>
              <li >
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