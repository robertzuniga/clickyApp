import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">

      <div className="img-container click-item">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div role="img" class="click item" >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div> */}
      {/* <div role="img" aria-label="click item" class="click-item" style="background-image: url(&quot;/assets/images/beth.png&quot;);"></div> */}
      {/* <div className="content">
        <ul>
          <li>
            <strong> {props.name} </strong>
          </li>
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        {/* </ul> */}
      {/* </div> */} 

      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
      */}



    </div>

);
}
export default FriendCard;
