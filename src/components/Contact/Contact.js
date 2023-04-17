import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <section id='contact'>
            <h5>How To</h5>
            <h2>Contact</h2>
            <div className='contact-container'>
                <p className='work'>Let's build it together</p>
                <form className='message'>
                    <input type='email'
                        className='mail'
                    />
                    <input type='text'
                        className='mess'
                    />
                </form>
            </div>
        </section>
    )
}
