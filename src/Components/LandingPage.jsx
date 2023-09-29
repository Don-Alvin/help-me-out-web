import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'

const LandingPage = () => {
  return (
    <div>
        <Header />
        <main className='lg:'>
          <Hero />
        </main>
        <Footer />
    </div>
  )
}

export default LandingPage