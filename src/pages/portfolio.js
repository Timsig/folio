import React from "react";

import { graphql } from "gatsby";
import SiteLayout from "../components/SiteLayout.js";

export default ({ data }) =>
  { 
  const { edges: posts } = data.allMarkdownRemark;
    return(
      <SiteLayout>
        <h1>This is the portfolio page</h1>
        {
          posts
            .filter(post => post.node.frontmatter.type === "case study")
                .map(({ node }) => (
                  <div key={node.id}>
                    <h2 key={node.id}>{node.frontmatter.title}</h2>
                  </div>
                )
        )}
      </SiteLayout>
    )
}


  

export const query = graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
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

// correct query:
// query {
//   allMarkdownRemark(
//     filter: {
//       frontmatter: { type: { eq: "case study" } }
//     }
//   ) {
//     edges {
//       node {
//         frontmatter {
//           title
//           featured_image
//           type
//         }
//       }
//     }
//   }
// }