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
    
    let prev = this.state.data.curPage;
    
    // this.setState(prevState => ({
    //   data: {
    //     // ...state.data,
    //     // ...newData,
    //     // ...newState,
    //     curPage: newData.curPage,
    //     prevPage: prev,
    //   },
    // }))
    this.setState({
      data:{
        curPage: newData.curPage,
        prevPage: prev,
      }
    })
  }

  render() {
    console.log("current state: ", this.state.data.curPage, this.state.data.prevPage)
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }
