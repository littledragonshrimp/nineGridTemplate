import React from 'react'

import Plating5 from "../assets/images/plating5.jpg"
import Outside from '../assets/images/outside.jpg'

function MenuCreator({ title, content, type }) {
    return (
        <>
            <div className="appetizers">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div classname="entrees">

            </div>

            <div className='desserts'>

            </div>

            <div className={`Menu${blockNumber} box`} href={link}>
                <img src={imgSrc} alt=""></img>
                {/* <img src={Plating5} alt="" srcset="" /> */}
                <h1>{h1}</h1>
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default MenuCreator