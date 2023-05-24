import React from "react"
import './Projects.css'
import todo from '../../assets/Screenshot 2023-05-23 at 7.11.52 PM.png'
import textify from '../../assets/Screenshot 2023-05-23 at 7.10.32 PM.png'
import macs from '../../assets/Screenshot 2023-05-23 at 7.12.55 PM.png'
import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons"
import { AiOutlineLink} from 'react-icons/ai'
export default function Project() {
    return (
        <section id="projects">
            <h4>My</h4>
            <h2>Projects</h2>
            <div className="projectrow">
                <div className="procard">
                    <img src={todo} alt="To-do list" className="proim" />
                    <p className="proname">To Do List</p>
                    <div className="progit single">
                        <IconContext.Provider value={{ className:"myReact-icons"}} >
                            <a href="https://github.com/harshitk2408/To_do_list" target="_blank" rel="noreferrer"><AiFillGithub className="git"/></a>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="procard">
                    <img src={textify} alt="textify" className="proim" />
                    <p className="proname">Text Utility</p>
                    <div className="progit">
                    <IconContext.Provider value={{ className:"myReact-icons"}}>
                            <a href="https://github.com/harshitk2408/hktext" target="_blank" rel="noreferrer"><AiFillGithub size={30} /></a>
                            </IconContext.Provider>
                    </div>
                    <div className="prolink">
                        <IconContext.Provider value={{ className:"myReact-icons"}}>
                            <a href="https://hktext.vercel.app/" target="_blank" rel="noreferrer"><AiOutlineLink size={30} /></a>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="procard">
                    <img src={macs} alt="MACS" className="proim" />
                    <p className="proname">MACS-DTU</p>
                    <div className="progit single">
                        <IconContext.Provider value={{ className:"myReact-icons"}} >
                            <a href="https://github.com/MACS-DTU/macsweb" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </section>
    )
}