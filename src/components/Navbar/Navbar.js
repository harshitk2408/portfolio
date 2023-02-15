import React from 'react'

import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiBook } from 'react-icons/bi'
import { GiPencilBrush } from 'react-icons/gi'
import { AiTwotoneMail } from 'react-icons/ai'
import { useState } from 'react'
export default function Navbar() {
    const [activeNav, setActiveNav] = useState('#header')
    return (
        <nav>
            <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /></a>
            <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><BiBook /></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiPencilBrush /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiTwotoneMail /></a>
        </nav >
    )
}

