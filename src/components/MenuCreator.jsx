import React from 'react'

import Plating5 from "../assets/images/plating5.jpg"
import Outside from '../assets/images/outside.jpg'

function MenuCreator({ title, content, type, price, blockNumber }) {
    return (
        <>
            <ul>
                <h3>{type}</h3>
                <li className={`Menu${blockNumber} menuCard ${type}`}>
                    < h2 > {title}</h2 >
                    <p className='contentP'> {content} </p>
                    <p className="priceP"> {price}</p>
                </li>



            </ul>
        </>
    )
}

export default MenuCreator

