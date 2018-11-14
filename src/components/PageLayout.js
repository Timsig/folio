import React from "react";
import TopNav from "./TopNav.js";

export default ({ children }) => 
  <div className="wrap-all">
    <TopNav />
    <div className="page-content">
      {children}
    </div>
  </div>

