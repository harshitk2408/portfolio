import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Me from './components/Me/Me'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Cta from './components/Cta/Cta'
export default function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Me />
            <Education />
            <Experience />
            <Contact />
        </div>
    )
}
