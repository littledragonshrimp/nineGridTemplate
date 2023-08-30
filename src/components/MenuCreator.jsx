import React from 'react'

import Plating5 from "../assets/images/plating5.jpg"
import Outside from '../assets/images/outside.jpg'

function MenuCreator({ title, content, type, price, blockNumber }) {
    return (
        <>
            <ul>

                <li className={`Menu${blockNumber} menuCard ${type}`}>
                    <h3>{type}</h3>
                    < h2 > {title}</h2 >
                    <div className='content-and-price-container'>
                        <p className='contentP'> {content} </p>
                        <span className="priceP"> {price}</span>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default MenuCreator

