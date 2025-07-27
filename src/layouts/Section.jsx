import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallary'
import Testimonials from '../components/Testimonials'
import Careers from '../components/Careers'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Banner from '../components/Banner'

function Section() {
  return (
    <>
        <Banner />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Careers />
        <Blog />
        <Contact />
    </>
  )
}

export default Section