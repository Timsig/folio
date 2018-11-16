import React from "react";
import "../styles/site.scss";
import { graphql } from "gatsby";
import SiteLayout from "../components/SiteLayout.js";

export default ({ data }) =>
  { console.log(data);
    return(
      <SiteLayout>
        <h1>This is the portfolio page</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2 key={node.id}>{node.frontmatter.title}</h2>
          </div>
        ))}
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