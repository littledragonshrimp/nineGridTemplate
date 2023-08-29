import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

function Navbar() {
    return (
        <nav>
            <ul className='Navbar-list'>

                <li><a><FontAwesomeIcon icon={faFacebook} alt="facebook" /></a></li>
                {/* <li> {BiPhoneCall}</li> */}
                <li><a><FontAwesomeIcon icon={faTiktok} alt="tiktok" /></a></li>
                <li><a><FontAwesomeIcon icon={faInstagram} alt="instagram" /></a></li>
            </ul>
        </nav>

    )
}

export default Navbar