import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallary'
import Testimonials from '../components/Testimonials'
import Careers from '../components/Careers'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

function Section() {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Careers />
        <Blog />
        <Contact />
    </div>
  )
}

export default Section