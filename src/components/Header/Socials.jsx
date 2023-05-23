import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { IconContext } from "react-icons";
export default function Socials() {
    return (
        <div className='socialheader' >
            <IconContext.Provider value={{ color: "white", size: "1.5em", className: 'icons' }}>
                <a href="https://leetcode.com/Harshit2483/" rel="noreferrer" target='_blank'><SiLeetcode /></a>
                <a href="https://www.linkedin.com/in/harshit-khurana-465979145/" rel="noreferrer" target='_blank'><AiFillLinkedin /></a>
                <a href="https://github.com/harshitk2408" rel="noreferrer" target='_blank'><AiFillGithub /></a>
            </IconContext.Provider>
        </div >
    )
}
