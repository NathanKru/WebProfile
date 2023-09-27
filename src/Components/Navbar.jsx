import React from "react";
import './Main.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header class="d-flex justify-content-center py-3" id="head">
      <ul class="nav nav-pills" >
        <li class="nav-item">
        <Link class="nav-link" to="/" title='Home'>
        Home
        </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/Certification" title='Certification'>
        Certification
        </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact" title='Contact'>
        Contact
        </Link>
    </li>
      </ul>
    </header>

  )
}

export default Navbar;