import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiCopy, BiEdit } from 'react-icons/bi'
import { FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Video = () => {
  return (
    <main>
        <header className='shadow pb-6'>
        <nav className='p-6 lg:px-[100px] lg:py-10 flex justify-between items-center'>
          <img src="images/logo.svg" alt="logo" />
          <aside className='hidden md:flex items-center gap-2'>
            <CgProfile className='w-10 h-10 font-bold text-text-grey'/>
            <span className='font-work'>John Mark</span>
            <MdKeyboardArrowDown className='w-4 h-6 text-text-grey' />
          </aside>
        </nav>
        <span className='p-6 lg:px-[100px] font-work text-text-grey text-[12px] md:text-[18px]'>Home/ Recent videos/
          <span className='text-primary-400 text-medium'> How To Create A Facebook Ad Listing</span>
        </span>
      </header>
      <section className='p-6 lg:px-[100px] lg:py-8 flex flex-col gap-10 '>
        <div className='flex flex-col gap-6'>
            <h2 className='text-[18px] md:text-[24px] font-sora font-semibold text-text-header flex items-center gap-6'>
                How To Create A Facebook Ad Listing
                <BiEdit />
            </h2>
            <div className='border border-solid border-gray-200 shadow rounded-lg p-4'>
                <video className='lg:h-[498px] w-full rounded-lg' src="" controls></video>
            </div>
        </div>
        <div className=' w-[90%] md:w-full'>
            <div className='w-full grid gap-4 lg:flex justify-between '>
              <form className=' w-full bg-primary-50 flex gap-4 lg:w-[40%] items center justify-between p-4 lg:px-6 lg:py-[14px] rounded'>
                <input className='bg-primary-50 rounded  outline-none placeholder:font-work lg:placeholder:text-[18px]' type="email" placeholder='Enter email of the reciever' />
                <button className='bg-primary-300 text-white font-work p-2 lg:px-[18px] lg:py-[14px] rounded'>Send</button>
              </form>
              <form className='w-full lg:w-[55%] bg-[#fafafa] border border-solid border-gray-200 flex gap-4  items center justify-between p-4 lg:px-6 lg:py-[14px] rounded'>
                <input className=' bg-[#fafafa] rounded  outline-none placeholder:font-work lg:placeholder:text-[18px] font-work lg:text-[18px] text-text-grey' type="text" value='https://www.helpmeout/Untitled_Video_20232509'/>
                <button className='border border-solid border-primary-main flex gap-2 items-center text-primary-main font-work p-2 lg:py-[14px] rounded'>
                    <BiCopy />
                    Copy url
                </button>
              </form>  
            </div>
        </div>
        <div className='grid gap-4'>
            <h6 className='text-primary-900 font-work font-medium text-[20px]'>Share your video</h6>
            <div className="flex gap-2">
              <button className='px-4 py-3 flex items-center gap-2 border border-solid border-primary-main rounded-md'>
                  <FaFacebook />
                  <span className='text-primary-900 font-medium font-work'>Facebook</span>
              </button>
              <button className='px-4 py-3 flex items-center gap-2 border border-solid border-primary-main rounded-md'>
                  <FaWhatsapp />
                  <span className='text-primary-900 font-medium font-work'>Whatsapp</span>
              </button>
              <button className='px-4 py-3 flex items-center gap-2 border border-solid border-primary-main rounded-md'>
                  <FaTelegram />
                  <span className='text-primary-900 font-medium font-work'>Telegram</span>
              </button>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Video