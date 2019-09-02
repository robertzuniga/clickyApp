import React from "react";
import "./style.css"
function Jumbotron() {
  return (
    <div className="jumbotron vertical-center">
      <h1>Clicky Game!</h1>
      <ul>
        <li>
          <span><i class="fa fa-cogs simple_bg top-features-bg"></i></span>
          <p><strong>Track</strong> Views, Clicks and Conversions.</p>
        </li>
      </ul>
    </div>
  );
}

export default Jumbotron;
