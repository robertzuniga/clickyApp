import React from "react"
import HoverImage from "react-hover-image"
// import yourFile from "./images/yourFile.svg"
// import yourFileHover from "./images/yourFile-hover.svg"

class Image extends React.Component {
  render(){
    return (
      <div>
        <h2>Oh Hai!</h2>
        <HoverImage
          src="https://via.placeholder.com/150"
          hoverSrc="https://via.placeholder.com/160"
          // src={yourFile}
          // hoverSrc={yourFileHover}
        />
      </div>
    )
  }
}

export default Image;