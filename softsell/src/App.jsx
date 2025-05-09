import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testmonials'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <div id='/'>
        <Hero/> 
      </div>
      
      <div id='how-it-works'>
        <HowItWorks/>
      </div>
      
      <div id='why-choose-us'>
        <WhyChooseUs/>
      </div>
      
      <div id='testimonials'>
        <Testimonials/>
      </div>
      
      <div id='contact'>
        <Contact/>
      </div>
      
      
    </>
  )
}

export default App
