import React from "react";
import "./style.css";
function Navbar() {
  return (

// 
<nav className="navbar navbar-dark navbar-expand-md justify-content-between">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link pl-0 brand " href="/">Clicky Game<span className="sr-only">Clicky Game</span></a>
                </li>
            </ul>
        </div>

        <a href="/" className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">Click an image to begin!</a>
 
        <div className="navbar-collapse collapse dual-nav w-50 order-2">
            <ul className="nav navbar-nav ml-auto">
 
                <li className="nav-item"><a className="nav-link" href="/"><i className="fa fa-twitter"></i></a></li>
 
            </ul>
        </div>
    </div>
</nav>


    // <nav className="navbar navbar-expand-lg navbar-dark">
    //   <ul className="navbar-nav mr-auto">
    //     <li className="nav-item active">
    //       <a className="nav-link" href="/">
    //        Clicky Game <span className="sr-only">(current)</span>
    //       </a>
    //     </li>
    //   </ul>

    //   <ul className="nav navbar-nav  mx-auto">
    //     <li><span>Click An Image To Begin</span> </li>
    //   </ul>

    // <ul className="nav navbar-nav navbar-right">

    //   <li><a><span>Score</span> </a></li>
    // </ul>

    //  {/* <ul class="nav navbar-nav navbar-right">
    //   <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
    //   <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    // </ul> */}
    //     {/* <ul nav navbar-nav navbar-right>
    //       <li className="nav-item mr-auto"> Click an image to begin</li>

    //       <li className="nav navbar-nav navbar-right">Score</li>
          
    //     </ul> */}
    // </nav>
  );
}

export default Navbar;
