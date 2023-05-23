import React from "react"
import './Projects.css'
import todo from '../../assets/Screenshot 2023-05-23 at 7.11.52 PM.png'
import textify from '../../assets/Screenshot 2023-05-23 at 7.10.32 PM.png'
import macs from '../../assets/Screenshot 2023-05-23 at 7.12.55 PM.png'
export default function Project() {
    return (
        <section id="projects">
            <h4>My</h4>
            <h2>Projects</h2>
            <div className="projectrow">
                <div className="procard">
                    <img src={todo} alt="To-do list" className="proim"/>
                </div>
                <div className="procard">
                    <img src={textify} alt="textify" className="proim"/>
                </div>
                <div className="procard">
                    <img src={macs} alt="MACS" className="proim"/>
                </div>
            </div>
        </section>
    )
}