import React from "react";

export default (props) => {
  return (
    <div key={props.key} className="caseStudyPreview">
      <h3>{props.title}</h3>
    </div>
  )
}