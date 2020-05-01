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
      <React.Fragment>
      <h1>This is the {this.props.data.curPage} page - h1 $scale4</h1>
        <p>Business stakeholders expressed growing concern at the shop website under-performing in terms of revenue. Google Analytics and Hotjar revealed fall-off rates over 60% during the checkout process. There was a clear business imperative to improve this situation as soon as possible. New delivery options (CollectPlus and International) also needed to be added to the checkout flow.</p> 
        <p>Development time had been allocated by PFS, our commerce cloud solution partner; this put the pressure on to deliver completed designs to them within a tight time frame.</p>
        <h2>This is an h2 - $scale3</h2>
        <p>Development time had been allocated by PFS, our commerce cloud solution partner; this put the pressure on to deliver completed designs to them within a tight time frame.</p>
        <h3>This is an h3 - $scale2</h3>
        <p>Development time had been allocated by PFS, our commerce cloud solution partner; this put the pressure on to deliver completed designs to them within a tight time frame.</p>
        <h4>This is an h4 - $scale1</h4>
        <p>Development time had been allocated by PFS, our commerce cloud solution partner; this put the pressure on to deliver completed designs to them within a tight time frame.</p>
      </React.Fragment>
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