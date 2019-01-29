import React from "react";
import SiteLayout from "../components/SiteLayout";
import CaseStudies from "../components/CaseStudies"
import styles from "../styles/homepage.module.scss";

export default () => 
<SiteLayout>
  <div className={styles.homePageContent}>
    <div className={styles.mainImageWrap}></div>
    <CaseStudies />
  </div>
</SiteLayout>

