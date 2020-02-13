import React from "react";
import ContextConsumer from "../components/Context.js"

class Contact extends React.Component {
  
  componentDidMount() {
    console.log("Did mount " + this.props.data.curPage)
    this.props.set({ curPage: "contact" })
  }

  render(){
    return(
      <React.Fragment>
        <h1>This is the {this.props.data.curPage} page</h1>
      </React.Fragment>
    )
  }
}

const ContactWrap = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <Contact data={data} set={set} />
    )}
  </ContextConsumer>
)
export default ContactWrap
  
    
 