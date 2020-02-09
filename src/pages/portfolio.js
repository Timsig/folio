import React from "react";

import { graphql } from "gatsby";
import ContextConsumer from "../components/Context.js"

class Portfolio extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      page: "portfolio",
      contextSetter: false
    }
    
  }
  // componentDidMount() {
  //   // 
  //   return (<ContextConsumer>
  //     {({ data, set }) => (

  //       set({ curPage: this.state.page })
  //     )}
  //   </ContextConsumer>)
  // }
  render(){
    return (
      <React.Fragment>
        
        <ContextConsumer>
          {({ data, set }) => (
            
            set({curPage:this.state.page})
          )}
        </ContextConsumer>
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
}

export default Portfolio;  

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
// export const query = graphql`
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
// `