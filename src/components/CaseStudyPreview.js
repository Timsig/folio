import React from "react";
import styles from "../styles/casestudies.module.scss";

export default (props) => {
  return (
    <div className={styles.caseStudyPreview}>
      <img src={props.thumb}/>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <h4 className={styles.cardIntro}>{props.intro}</h4>
      <p className={styles.readMore}>read more</p>
    </div>
  )
}