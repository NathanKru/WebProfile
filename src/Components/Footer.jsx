import React from "react"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="py-3 my-4" id="head">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <Link class="nav-link px-2 text-body-secondary" to="/" title='Home'>
                        Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link px-2 text-body-secondary" to="/Certification" title='Certification'>
                        Certification
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link px-2 text-body-secondary" to="/contact" title='Contact'>
                        Contact
                    </Link>
                </li>
                {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li> */}
            </ul>
            <p class="text-center text-body-secondary">@2023 Nathan Kruger, All rights reserved.</p>
        </footer>
    )
}

export default Footer

