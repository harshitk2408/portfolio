import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Me from './components/Me/Me'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
// import Particle from './components/Particle/Particle'
export default function App() {
    return (
        <div>
            {/* <Particle/> */}
            <Header />
            <Navbar />
            <Me />
            <Projects/>
            <Education />
            <Skills />
            <Contact />
        </div>
    )
}
