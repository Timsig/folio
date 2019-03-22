import React from "react";
import Link from "gatsby-link";
import styles from "../styles/casestudies-preview.module.scss";

export default (props) => {
  return (
    <Link to={props.slug}>
      <div className={styles.caseStudyPreview}>
        <img src={props.thumb}/>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <h4 className={styles.cardIntro}>{props.intro}</h4>
        <p className={styles.readMore}>Read more</p>
      </div>
    </Link>
  )
}