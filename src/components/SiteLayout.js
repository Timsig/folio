import React from "react";
import { Helmet } from "react-helmet";
import TopNav from "./TopNav.js";

export default ({ children }) => 
  <div className="wrap-all">
    <Helmet>
      <title>Tim Signore | UX</title>
    </Helmet>
    <TopNav />
    <div className="page-content-outer">
      {children}
    </div>
  </div>

