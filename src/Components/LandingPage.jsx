import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Features from './Features'
import Works from './Works'

const LandingPage = () => {
  return (
    <div className='bg-[#f4f6f8]'>
        <Header />
        <main className='lg:'>
          <Hero />
          <Features />
          <Works />
        </main>
        <Footer />
    </div>
  )
}

export default LandingPage