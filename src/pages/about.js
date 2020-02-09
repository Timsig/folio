import React from "react";

import ContextConsumer from "../components/Context.js"
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: ""
    }
  }

  render() {
    return (
      <ContextConsumer>
        {({ data, set }) => (
          <React.Fragment>
            <h1>This is the {data.curPage} page</h1>
            <div onClick={() => set({ curPage: "about" })}>
              Changer
            </div>
          </React.Fragment>
      )}
        </ContextConsumer>
    )
  }
}

export default About