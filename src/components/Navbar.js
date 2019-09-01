import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Clicky Game <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item mr-auto"> Click an image to begin</li>

          <li>Score</li>

        </ul>
    </nav>
  );
}

export default Navbar;
