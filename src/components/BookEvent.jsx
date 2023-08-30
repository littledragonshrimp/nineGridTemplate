import React from 'react'
import "../AboutBookEvent.scss"

function BookEvent() {
    return (
        <>
            <div className='book-event-container'>
                <h2>Select a date</h2>
                <section>
                    <input type="date" />
                    <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
                    <label class="toggle-switch-label" for="toggleSwitch">
                        is this date flexible?
                    </label>
                </section>

                <h2>Start Time</h2>
                <section>
                    <input type="time" />
                </section>

                <h2>Approximate Guest Count</h2>
                <section>
                    <input type="number" placeholder='Insert Number' />
                </section>


                <h2>Contact Information</h2>
                <section className='contact-info'>
                    <input type="text" placeholder='Name' />
                    <input type="number" placeholder='Phone Number' />
                    <input type="email" placeholder='Email' />

                </section>

                <button>Confirm</button>

            </div>
        </>
    )
}

export default BookEvent