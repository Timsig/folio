import React from "react";
import { graphql } from "gatsby";
import SiteLayout from "../components/SiteLayout";
import "../styles/casestudy.scss";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="caseStudyBg">
      <SiteLayout>
        <div className="caseStudyContainer" 
        dangerouslySetInnerHTML={{ __html: post.html }}>
          
        </div>
      </SiteLayout>
    </div>
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