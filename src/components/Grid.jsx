import React from 'react'
import "../Styles.scss"


// import Card1 from './Card1.jsx'
// import Card2 from './Card2.jsx'
// import Card3 from './Card3.jsx'
import CardCreator from './CardCreator.jsx'
import Outside from "../assets/images/outside.jpg"
import Plating from "../assets/images/plating.jpg"
import Plating2 from "../assets/images/plating2.jpg"
import Plating3 from "../assets/images/plating3.jpg"
import Plating4 from "../assets/images/plating4.jpg"
import Plating5 from "../assets/images/plating5.jpg"
import reactLogo from "../assets/react.svg"
import Noodle from "../assets/images/noodle.jpg"
import Inside from "../assets/images/inside.jpg"
import Service from "../assets/images/service.jpg"



function Grid() {
    const CardBlocks = [
        {
            h1: "Restaurant React",
            title: "",
            link: "/",
            imgSrc: reactLogo,
            // imgSrc: '../assets/images/forest2.jpg',
            blockNumber: 1
        },
        {
            title: "About",
            link: "/About",
            imgSrc: Inside
        },
        {
            title: "Menu",
            link: "/Menu",
            imgSrc: Plating5
        },
        {
            title: "Drinks",
            link: "/Drinks",
            imgSrc: Plating4
        },
        {
            title: "Location",
            link: "https://google.com",
            imgSrc: Outside
        },
        {
            title: "Reserve",
            link: "https://google.com",
            imgSrc: Noodle
        },
        {
            h1: "",
            title: "Instagram",
            link: "https://instagram.com",
            imgSrc: Plating2
            // imgSrc: '../assets/images/forest2.jpg',
        },
        {
            title: "Join our Team",
            link: "/Team",
            imgSrc: Service
        }
    ]

    return (
        <>
            <div className="main-grid">

                {CardBlocks.map((block, i) => {
                    return (
                        <>
                            <CardCreator
                                title={block.title}
                                h1={block.h1}
                                link={block.link}
                                imgSrc={block.imgSrc}
                                blockNumber={i + 1}
                            />
                        </>
                    );
                })}

            </div >
        </>
    )
}

export default Grid


{/* <Card1 />
                <Card2 />
                <Card3 /> */}
{/* <div className="container-2 box">2</div> */ }
{/* <div className="container-3 box">2</div>
                            <div className="container-4 box">2</div>
                            <div className="container-5 box">2</div>
                            <div className="container-6 box">2</div>
                            <div className="container-7 box">2</div>
                            <div className="container-8 box">2</div>
                            <div className="container-9 box">2</div> */}