import React from 'react'
import './Header.css'
import Cta from '../Cta/Cta'
import Socials from './Socials'
import mypic from '../../assets/harshit.png'
export default function Header() {
    return (
        <header>
            <div className='container header-container'>
                <h4>Hello I'm</h4>
                <h1>Harshit Khurana</h1>
                <h4 className='text-light'>Programmer and Front End Developer</h4>
                <Cta />
                <Socials />
                <img src={mypic} alt="mypic" className='me'></img>
                <a className='scroll-down' href="/">Scroll Down</a>
            </div>
        </header>
    )
}
