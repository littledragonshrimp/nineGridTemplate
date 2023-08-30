import React from 'react'

function DrinkCreator({ title, content, type, price, blockNumber }) {
    return (
        <>
            <ul>
                <li className={`Drinks${blockNumber} drinkCard ${type}`}>
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

export default DrinkCreator