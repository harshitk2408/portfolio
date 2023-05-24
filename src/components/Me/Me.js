import React from 'react'
import './Me.css'
import { BsLaptop } from 'react-icons/bs'
import { FaGraduationCap} from 'react-icons/fa'
export default function Me() {
    return (
        <section id='about'>
            <h5>Little bit</h5>
            <h2>About Me</h2>
            <div className='about-block'>
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
                            <FaGraduationCap className='about-icon' />
                            <h5>
                                Education
                            </h5>
                            <small>B.Tech : Delhi Technological University....</small>
                        </a>
                    </div>
                    <p>
                        I am a second-year undergraduate student at Delhi Technological University, pursuing a degree in Mathematics and Computing Engineering. I am extremely passionate about my field of study and enjoy solving complex problems. My strong work ethic and dedication towards my academics and career make me a career-oriented and determined individual. I believe in putting in the necessary effort to achieve my goals, and I am not afraid to take on challenges that come my way. I am a hardworking individual who constantly strives to improve myself.
                    </p>
                    <a className='btn' href='#contact'>Let's Talk</a>


                </div>
            </div>
        </section>
    )
}
