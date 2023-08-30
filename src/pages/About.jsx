import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookEvent from '../components/BookEvent'

function About() {
    return (
        <>
            <Navbar />
            <article className="private-event-container">
                <h1>Private Events</h1>
                <section>Book your next private experience at Restaurant React! Whether you’re celebrating a special occasion, intimate dinner, company party, or just looking for a private, exclusive experience, Restaurant React is happy to host your group for an Italian-ish private party where our team will curate an evening you won’t forget.</section>

            </article>

            <BookEvent />
            <Footer />
        </>
    )
}

export default About