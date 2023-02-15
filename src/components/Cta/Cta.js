import React from 'react'
import './Cta.css'
import resume from '../../assets/MyResume.pdf'
export default function Cta() {
    return (
        <div className='cta'>
            <a className='btn' href={resume} target="_blank" rel='noreferrer'>CV</a>
            <div className='btn btn-primary'>
                Let's Talk
            </div>

        </div>
    )
}
