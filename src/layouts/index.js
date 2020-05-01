import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.scss";
import { ContextProviderComponent } from "../components/Context.js";
import TopNav from "../components/TopNav.js";

export default ({ children }) =>
  <ContextProviderComponent>
    <div className="wrap-all">
      <Helmet>
        <title>Tim Signore | UX</title>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&family=Merriweather:ital,wght@0,400;0,900;1,400&display=swap" rel="stylesheet"></link>
      </Helmet>
      
      <TopNav />
      <div className="page-content-outer">
        {children}
      </div>
    </div>
  </ContextProviderComponent>