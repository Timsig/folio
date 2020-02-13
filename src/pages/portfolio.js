import React from "react";

import { graphql } from "gatsby";
import ContextConsumer from "../components/Context.js"

class Portfolio extends React.Component {
  
  componentDidMount() {
    console.log("Did mount " + this.props.data.curPage)
    this.props.set({ curPage: "portfolio" })
  }
  
  render(){
    return(
      <h1>This is the {this.props.data.curPage} page</h1>
    );
  }
}

const PortfolioWrap = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <Portfolio data={data} set={set} />
    )}
  </ContextConsumer>
)
    
    // (
    //   <React.Fragment>
        
    //     <ContextConsumer>
    //       {({ data, set }) => (
            
    //         <h2>{data.curPage}</h2>
    //       )}
    //     </ContextConsumer>
    //     <h1>This is the portfolio page</h1>
    //   //   {/* {
      //     posts
      //       .filter(post => post.node.frontmatter.type === "case study")
      //           .map(({ node }) => (
      //             <div key={node.id}>
      //               <h2 key={node.id}>{node.frontmatter.title}</h2>
      //             </div>
      //           )
      //   )} */}
//       </React.Fragment>
//     )
//   }
// }

export default PortfolioWrap;  

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