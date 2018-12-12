import React from "react";
import styles from "../styles/casestudies.module.scss";
import { graphql } from "gatsby";

export default ({ data }) => {
 console.log(data);
  return(
    <div className={styles.caseStudies}>
       {/* {data.edges.map(({ node }) => ( */}
   {/* <h2 key={node.id}>{node.frontmatter.title}</h2> */}
   {/* ))} */}
    </div>
  )
}



export const query = graphql`
query {
  allMarkdownRemark(
    filter: {
      frontmatter: { type: { eq: "case study" } }
    }
  ) {
    edges {
      node {
        frontmatter {
          title
          featured_image
          type
        }
      }
    }
  }
}
`