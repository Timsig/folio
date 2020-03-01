// Context.js
import React from "react"

const defaultContextValue = {
  data: {
    // set your initial data shape here
    prevPage: "",
    curPage: "",
  },
  set: () => { },
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    console.log("current state: ", this.state.data.curPage, this.state.data.prevPage)
    // let newState = {
    //   curPage: newData.curPage,
    //   prevPage: this.state.data.curPage,
    // }
    // console.log("newState: ", newState);
    this.setState(prevState => ({
      data: {
        // ...state.data,
        // ...newData,
        // ...newState,
        curPage: newData.curPage,
        prevPage: prevState.data.curPage,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }
