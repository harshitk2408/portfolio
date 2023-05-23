import React from 'react'
import './Cta.css'
import resume from '../../assets/harshit khruana-resumeweb.pdf'
export default function Cta() {
    return (
        <div className='cta'>
            <a className='btn' href={resume} target="_blank" rel='noreferrer'>CV</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>

        </div>
    )
}
