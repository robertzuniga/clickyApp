import React from "react";
import "./style.css";

// function FriendCard(props) {
//   return (
//     <div className="card" onClick={props.imageClick}>
//       <div className="img-container">
//           {/* <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} /> */}
//           <img alt={props.image.replace(".jpg", "")} src={props.image} />

//         {/* <img alt={props.name} src={props.image} /> */}
//       </div>
//     </div>
// );
// }

const FriendCard = props => (
  <div className="card" onClick={() => props.pointTotal(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);



export default FriendCard;
