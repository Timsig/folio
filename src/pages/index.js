import React from "react";
// import CaseStudies from "../components/CaseStudies"
import styles from "../styles/homepage.module.scss";
import ContextConsumer from "../components/Context.js"

class  Homepage extends React.Component {
  componentDidMount() {
    console.log("Did mount " + this.props.data.curPage)
    this.props.set({ curPage: "home" })
  }

  render(){
    return(
      <div className={styles.homePageContent}>
        <section className={styles.sectionOne}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1>{this.props.data.curPage}</h1>
          </div>
        </section>
        {/* <CaseStudies /> */}
      </div>
    )
  }
}

const HomepageWrap = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <Homepage data={data} set={set} />
    )}
  </ContextConsumer>
)

export default  HomepageWrap

  



