import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";
export default function Socials() {
    return (
        <div className='socialheader' >
            <IconContext.Provider value={{ color: "white", size: "1.5em", className: 'icons' }}>
                <a href="https://www.linkedin.com/in/harshit-khurana-465979145/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/harshitk2408" target="_blank"><AiFillGithub /></a>
            </IconContext.Provider>
        </div >
    )
}
