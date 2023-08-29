import React from 'react'

import Plating5 from "../assets/images/plating5.jpg"
import Outside from '../assets/images/outside.jpg'

function CardCreator({ h1, title, imgSrc, link, blockNumber, }) {
    return (
        <a className={`Card${blockNumber} box`} href={link}>
            <img src={imgSrc} alt=""></img>
            {/* <img src={Plating5} alt="" srcset="" /> */}
            <h1>{h1}</h1>
            <h2>{title}</h2>
        </a>
    )
}

export default CardCreator