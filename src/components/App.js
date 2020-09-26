import React from 'react'
import '../components/App.css'

// Components 
import Hero from './Hero/Hero'
import Philosophy from './Philosophy/Philosophy' 
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer' 

export default function App() {
    return (
        <>
            <Hero></Hero> 
            <Philosophy></Philosophy>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}
