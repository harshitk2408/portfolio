import React from 'react'
import './Me.css'
import aboutpic from '../../assets/about.jpg'
import { BsLaptop } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'
export default function Me() {
    return (
        <section id='about'>
            <h5>Little bit</h5>
            <h2>About Me</h2>
            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-me-image'>
                        <img src={aboutpic} alt="about-pic" ></img>
                    </div>
                </div>
                <div className='about-contents'>
                    <div className='about-cards'>
                        <a className='about-card' href='#skills'>
                            <BsLaptop className='about-icon' />
                            <h5>
                                Skills
                            </h5>
                            <small>C++, Adobe Premiere Pro, HTML ....</small>
                        </a>
                        <a className='about-card' href='#education'>
                            <BsFillBookmarkFill className='about-icon' />
                            <h5>
                                Education
                            </h5>
                            <small>B.Tech : Delhi Technological University....</small>
                        </a>
                    </div>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </p>
                    <a className='btn' href='#contact'>Let's Talk</a>


                </div>
            </div>
        </section>
    )
}
