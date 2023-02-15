import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Me from './components/Me/Me'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
export default function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Me />
            <Education />
            <Skills />
            <Contact />
        </div>
    )
}
