import React from "react";
import ContextConsumer from "../components/Context.js"

class About extends React.Component {
 
  componentDidMount() {
    this.props.set({ curPage: "about" })
  }

  componentWillUnmount() {
    this.props.set({ prevPage: "about" })
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