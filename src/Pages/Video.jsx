const Video = () => {
  return (
    <main>
        <header className='shadow'>
        <nav className='px-[100px] py-10 flex justify-between items-center'>
          <img src="images/logo.svg" alt="logo" />
          <aside className='flex items-center gap-2'>
            <CgProfile className='w-10 h-10 font-bold text-text-grey'/>
            <span className='font-work'>John Mark</span>
            <MdKeyboardArrowDown className='w-4 h-6 text-text-grey' />
          </aside>
        </nav>
        <aside className='px-[100px] flex justify-between pb-[43px] items-center'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-sora font-bold text-text-header text-[32px]'>Hello, John Mark</h3>
            <span className='font-work text-[18px] text-text-grey opacity-70'>Here are your recorded videos</span>
          </div>
          <form className='border border-solid border-primary-50 rounded flex gap-2 items-center px-6 py-4 bg-primary-50'>
            <MdSearch className='text-text-grey w-6 h-6' />
            <input className='bg-primary-50 outline-none h-8 text-text-grey font-work' type="search" />
          </form>
        </aside>
      </header>
    </main>
  )
}

export default Video