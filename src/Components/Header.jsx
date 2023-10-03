import { Link } from "react-router-dom"
import { BiMenuAltRight } from 'react-icons/bi'

const Header = () => {
  return (
    <header className='p-4 md:p-6 lg:px-[100px] py-[12px] sticky top-0 right-0 left-0 shadow bg-white'>
      <nav className="w-full flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" />
        <div className="hidden md:flex gap-[39px]">
          <span className='font-work font-medium'>Features</span>
          <span className='font-work font-medium'>How It Works</span>
        </div>
        <Link to='/auth' className="hidden md:block font-sora font-semibold text-[18px] text-primary-main">Get Started</Link>
        <div className="md:hidden">
          <BiMenuAltRight className="text-primary-main h-8 w-8" />
      </div>
      </nav>
    </header>
  )
}

export default Header