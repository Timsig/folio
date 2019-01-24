import React from "react";
import styles from "../styles/casestudies.module.scss";

export default (props) => {
  return (
    <div className={styles.caseStudyPreview}>
    {/* <img src={props.image}/> */}
      <h2 className={styles.cardTitle}>{props.title}</h2>
      
    </div>
  )
}