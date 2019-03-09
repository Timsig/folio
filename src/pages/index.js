import React from "react";
import SiteLayout from "../components/SiteLayout";
import CaseStudies from "../components/CaseStudies"
import styles from "../styles/homepage.module.scss";

export default () => 
<SiteLayout>
  <div className={styles.homePageContent}>
    <div className={styles.mainImageWrap}>
        <h1>Some amazing headline text<br />will <span>surely </span>go here</h1>
    </div>
    <CaseStudies />
  </div>
</SiteLayout>

