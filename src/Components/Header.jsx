import { Link } from "react-router-dom"
import { BiMenuAltRight } from 'react-icons/bi'
import { GiCancel } from 'react-icons/gi'
import { useState } from "react"

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const handleMobileMenu = () => {
      setIsMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
      setIsMobileMenuOpen(false)
  }

  return (
    <header className='p-4 md:p-6 lg:px-[100px] py-[12px] sticky top-0 right-0 left-0 shadow bg-white'>
      <nav className="w-full flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" />
        <div className="hidden md:flex gap-[39px]">
          <a href="#features" className='font-work font-medium'>Features</a>
          <a href="#works" className='font-work font-medium'>How It Works</a>
        </div>
        <Link to='/auth' className="hidden md:block font-sora font-semibold text-[18px] text-primary-main">Get Started</Link>
        <div className="md:hidden" onClick={handleMobileMenu}>
          <BiMenuAltRight className="text-primary-main h-8 w-8" />
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-[100vh] w-[70%] bg-white z-40">
                <GiCancel 
                    className='text-gray-700 text-xl absolute top-8 right-[45%]'
                    onClick={closeMobileMenu}
                />
                    <ul className='flex flex-col mt-20 gap-4 ml-6'>
                        <li className='px-2 font-work text-[18px] text-primary-main font-medium '>
                            <Link to='/auth' onClick={closeMobileMenu}>Get started</Link>
                        </li>
                        <li className='px-2 font-work text-[18px] text-primary-main font-medium '>
                            <a href="#works" onClick={closeMobileMenu}>How it works</a>
                        </li>
                        <li className='px-2 font-work text-[18px] text-primary-main font-medium '>
                            <a href='#features' onClick={closeMobileMenu}>Features</a>
                        </li>
                    </ul>
            </div>
        )}

        {/* backdrop  for small screens */}
        {isMobileMenuOpen && (
            <div 
                className='lg:hidden absolute top-0 h-[100vh] w-full left-0 bg-black opacity-90 z-30'
                onClick={closeMobileMenu}
            >
            </div>
            )}
      </nav>
    </header>
  )
}

export default Header