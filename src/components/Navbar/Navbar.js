import React from 'react'
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiBook } from 'react-icons/bi'
import { AiTwotoneMail } from 'react-icons/ai'
export default function Navbar() {
    return (
        <nav>
            <a href='/'><AiOutlineHome /></a>
            <a href='/'><BsFillPersonFill /></a>
            <a href='/'><BiBook /></a>
            <a href='/'><AiTwotoneMail /></a>
        </nav>
    )
}
