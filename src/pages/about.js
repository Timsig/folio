import React from "react";
import ContextConsumer from "../components/Context.js"

class About extends React.Component {
 
  componentDidMount() {
    console.log("Did mount " + this.props.data.curPage)
    this.props.set({ curPage: "about" })
  }

  render() {
    return (
      <ContextConsumer>
        {({ data, set }) => (
          <React.Fragment>
            <h1>This is the {data.curPage} page</h1>
          </React.Fragment>
        )}
      </ContextConsumer>
    )
  }
}

const AboutWrap = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <About data={data} set={set} />
    )}
  </ContextConsumer>
)

export default AboutWrap