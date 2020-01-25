import React from "react";

import { graphql } from "gatsby";


export default ({ data }) =>
  { 
    console.log(data);
  // const { edges: posts } = data.allMarkdownRemark;
    return(
      <React.Fragment>
        <h1>This is the portfolio page</h1>
        {/* {
          posts
            .filter(post => post.node.frontmatter.type === "case study")
                .map(({ node }) => (
                  <div key={node.id}>
                    <h2 key={node.id}>{node.frontmatter.title}</h2>
                  </div>
                )
        )} */}
      </React.Fragment>
    )
}


  

// export const query = graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             id
//             frontmatter {
//               title
//               featured_image
//               type
//             }
//           }
//         }
//       }
//     }
  
// `

// correct query:
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