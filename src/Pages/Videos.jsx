import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md'
import VideoCard from '../Components/VideoCard'

const Videos = () => {
  return (
    <main>
      <header className='flex flex-col shadow'>
        <nav className='p-6 md:px-[100px] md:py-10 flex justify-between items-center'>
          <img src="images/logo.svg" alt="logo" />
          <aside className='hidden md:flex items-center gap-2'>
            <CgProfile className='w-10 h-10 font-bold text-text-grey'/>
            <span className='font-work'>John Mark</span>
            <MdKeyboardArrowDown className='w-4 h-6 text-text-grey' />
          </aside>
        </nav>
        <aside className='p-6 md:px-[100px] flex justify-between md:pb-[43px] items-center'>
          <div className='hidden md:flex flex-col gap-2'>
            <h3 className='font-sora font-bold text-text-header text-[32px]'>Hello, John Mark</h3>
            <span className='font-work text-[18px] text-text-grey opacity-70'>Here are your recorded videos</span>
          </div>
          <form className='border border-solid border-primary-50 rounded flex gap-2 items-center px-6 py-4 bg-primary-50'>
            <MdSearch className='text-text-grey w-6 h-6' />
            <input className='bg-primary-50 outline-none h-8 text-text-grey font-work' type="search" />
          </form>
        </aside>
      </header>
      <article className='p-6 lg:px-[100px] lg:py-10 flex flex-col gap-9'>
        <aside className='flex flex-col gap-6'>
          <h5 className='font-work text-text-header opacity-80 text-[18px] font-medium'>Recent files</h5>
          <div className='grid gap-4 md:grid-cols-2'>
            <VideoCard />
            <VideoCard />
          </div>
        </aside>
        <aside className='flex flex-col gap-6'>
          <h5 className='font-work text-text-header opacity-80 text-[18px] font-medium'>Files form last week</h5>
          <div className='grid gap-4 md:grid-cols-2'>
            <VideoCard />
            <VideoCard />
          </div>
        </aside>
      </article>
    </main>
  )
}

export default Videos