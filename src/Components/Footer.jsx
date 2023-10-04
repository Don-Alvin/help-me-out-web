import React from 'react'

const Footer = () => {
  return (
    <footer className='p-6 md:p-6 lg:px-[130px] lg:py-[98px] bg-primary-main flex flex-col md:flex-row justify-between gap-6'>
      <img className='self-start p-[10px]' src='/images/footerLogo.svg' alt='logo' />
      <article className='text-white flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-[220px]'>
        <div className='flex flex-col gap-[26px]'>
          <h2 className='text-xl font-bold'>Menu</h2>
          <span>Home</span>
          <span>Converter</span>
          <span>How it Works</span>
        </div>
        <div className='flex flex-col gap-[26px]'>
          <h2 className='text-xl font-bold'>About us</h2>
          <span>About</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </div>
        <div className='flex flex-col gap-[26px]'>
          <h2 className='text-xl font-bold'>Screen Record</h2>
          <span>Browser Window</span>
          <span>Desktop</span>
          <span>Application</span>
        </div>
      </article>
    </footer>
  )
}

export default Footer