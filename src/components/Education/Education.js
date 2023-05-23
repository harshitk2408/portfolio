import React from 'react'
import './Education.css'
import logo from '../../assets/logo.png'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-simple-typewriter'
// import ReactDOM from 'react-dom';
export default function Education() {
    const { ref, inView } = useInView({
        threshold: 0.8,
    }
    );
    return (
        <section id='education' ref={ref}>
            <h5>My</h5>
            <h2>Qualifications</h2>
            <div className='container ed-container'>
                <img src={logo} className={inView ? 'inst-logo logodisp' : 'inst-logo'} alt="dtu-logo"></img>
                <div className='ed-content'>
                    <p>{inView && <Typewriter
                        words={['2021-2025']} />}</p>
                    {inView && <Typewriter
                        words={['Pursuing Btech from Delhi Technological University specialization in Mathematcis and Computing engineering']}
                        typeSpeed={40}
                    />}
                </div>
                <div className='ed-content-mob'>
                    <p>2021-2025</p>
                    <div>Pursuing Btech from Delhi Technological University specialization in Mathematcis and Computing engineering</div>
                </div>
            </div>
        </section>
    )
}
