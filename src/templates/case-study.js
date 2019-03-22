import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/SiteLayout";
import styles from "../styles/casestudy.module.scss";

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post.html);
  return (
    <SiteLayout>
      <div className={styles.caseStudyContainer} 
      dangerouslySetInnerHTML={{ __html: post.html }}>
        
      </div>
    </SiteLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`