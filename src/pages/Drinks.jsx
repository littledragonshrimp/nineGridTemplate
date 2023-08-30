import React from 'react'
import DrinkCreator from '../components/DrinkCreator'
import Navbar from '../components/Navbar'
import "../MenuStyles.scss"

function Drinks() {
    const DrinkBlocks = [
        {
            title: 'GIARDINO VERDE',
            content: 'Caravedo Pisco, Cucumber, Suze, Habanero',
            blockNumber: "1",
            price: "18",
            type: "cocktail",

        },
        {
            title: "MARCELLO G",
            content: "Whistle Pig Piggyback Rye, Orange Liqueur",
            price: "18",
            type: "cocktail",
        },
        {
            title: "ITALIAN OLD FASHIONED",
            content: "Heaven’s Door, Cynar",
            price: "18",
            type: "cocktail",
        },
        {
            title: "NEGRONI BIANCO",
            content: "Gin, Elderflower, Lillet, Grapefruit",
            price: "18",
            type: "cocktail",
        },
        {

            title: "LAVENDER HAZE",
            content: "Vodka, Lemon, Honey, Lavender",
            price: "18",
            type: "cocktail",
        },
        {

            title: "MEZCAL AMARENA",
            content: "Montelobos, Tart Cherry, Thyme Honey",
            price: "18",
            type: "cocktail",
        },
        {
            title: "ROSA CALDA",
            content: "Spicy Tequila, Raspberry, Pink Peppercorn",
            price: "18",
            type: "cocktail",

        },
    ]


    return (
        <>
            <Navbar />
            <h1>Drinks</h1>
            <div className="main-grid">

                {DrinkBlocks.map((block, i) => {
                    return (
                        <>
                            <DrinkCreator
                                title={block.title}
                                content={block.content}
                                type={block.type}
                                price={block.price}
                                blockNumber={i + 1}
                            />
                        </>
                    );
                })}
            </div >
        </>
    )
}

export default Drinks