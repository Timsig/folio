import React from "react";
import styles from "../styles/casestudies.module.scss";
import { StaticQuery, graphql } from "gatsby";
import CaseStudyPreview from "./CaseStudyPreview";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: { type: { eq: "case study" } }
          }
          ) {
          edges {
            node {
              id
              frontmatter {
                thumb
                featured_image
                title
                intro
                type
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.caseStudies}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <CaseStudyPreview key={node.id} title={node.frontmatter.title} intro={node.frontmatter.intro} thumb={node.frontmatter.thumb} image={node.frontmatter.featured_image} />
      ))}
      </div>
    )}
  />
)



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