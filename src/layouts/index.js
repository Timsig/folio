import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.scss";
import TopNav from "../components/TopNav.js";

export default ({ children }) =>
  <div className="wrap-all">
    <Helmet>
      <title>Tim Signore | UX</title>
      <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700|Lora:400,400i" rel="stylesheet"></link>
    </Helmet>
    
    <TopNav />
    <div className="page-content-outer">
      {children}
    </div>
  </div>