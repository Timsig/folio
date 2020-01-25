import React from "react";
import { graphql } from "gatsby";

import "../styles/casestudy.scss";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="caseStudyBg">
  
        <div className="caseStudyContainer" 
        dangerouslySetInnerHTML={{ __html: post.html }}>
          
        </div>
      
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