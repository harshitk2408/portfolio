import React from 'react'
import './Skills.css'
import { useInView } from 'react-intersection-observer'
export default function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <section id='skills' ref={ref}>
            <h2>Skills</h2>
            <div className='skillbars'>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-cpp" : ""}></div>
                    </div>
                    <p>
                        C++
                    </p>
                </div>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-c" : ""}></div>
                    </div>
                    <p>
                        C
                    </p>
                </div>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-Python" : ""}></div>
                    </div>
                    <p>
                        Python
                    </p>
                </div>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-HTML" : ""}></div>
                    </div>
                    <p>
                        HTML
                    </p>
                </div>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-CSS" : ""}></div>
                    </div>
                    <p>
                        CSS
                    </p>
                </div>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-Javascript" : ""}></div>
                    </div>
                    <p>
                        Javascript
                    </p>
                </div>
                <div className='skillcontent'>
                    <div className='skillbarbg'>
                        <div className={inView ? "skillbarbg-ReactJs" : ""}></div>
                    </div>
                    <p>
                        ReactJs
                    </p>
                </div>
            </div>

        </section>
    )
}
