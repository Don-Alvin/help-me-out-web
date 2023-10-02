import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Works from '../Components/Works'

const LandingPage = () => {
  return (
    <div className='bg-[#f4f6f8]'>
        <Header />
        <main>
          <Hero />
          <Features />
          <Works />
        </main>
        <Footer />
    </div>
  )
}

export default LandingPage