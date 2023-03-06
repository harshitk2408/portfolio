import React from 'react'
import './Education.css'
import logo from '../../assets/logo.png'
// import hlogo from '../../assets/ha-logo.png'
export default function Education() {
    return (
        <section id='education'>
            <h5>My</h5>
            <h2>Qualifications</h2>
            <div className='container ed-container'>
                <div className='ed-col'>
                    <div className='ed-logo'>
                        <img src={logo} className='inst-logo' alt="dtu-logo"></img>
                    </div>
                    <div className='ed-content'>
                        <h4>2021-2025</h4>
                        Pursuing BTech from <em>Delhi Technological University</em> specialization in <em>Mathematics and Computing</em> Engineering.
                    </div>
                </div>
                {/* <div className='ed-col-school'>
                    <div className='ed-content'>
                        Pursuing BTech from <em>Delhi Technological University</em> specialization in <em>Mathematics and Computing</em> Engineering.
                    </div>
                    <div className='ed-logo'>
                        <img src={hlogo} className='inst-logo' alt="dtu-logo"></img>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
