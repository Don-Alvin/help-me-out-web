import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiCopy, BiEdit } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'

const Video = () => {
  return (
    <main>
        <header className='shadow pb-6'>
        <nav className='px-[100px] py-10 flex justify-between items-center'>
          <img src="images/logo.svg" alt="logo" />
          <aside className='flex items-center gap-2'>
            <CgProfile className='w-10 h-10 font-bold text-text-grey'/>
            <span className='font-work'>John Mark</span>
            <MdKeyboardArrowDown className='w-4 h-6 text-text-grey' />
          </aside>
        </nav>
        <span className='px-[100px] font-work text-text-grey text-[18px]'>Home/ Recent videos/
         <span className='text-primary-400 text-medium'> How To Create A Facebook Ad Listing</span>
        </span>
      </header>
      <section className='px-[100px] py-8 flex flex-col gap-10 '>
        <div className='flex flex-col gap-6'>
            <h2 className='text-[24px] font-sora font-semibold text-text-header flex items-center gap-6'>
                How To Create A Facebook Ad Listing
                <BiEdit />
            </h2>
            <div className='border border-solid border-gray-200 shadow rounded-lg p-4'>
                <video className='h-[498px] w-full rounded-lg' src="" controls></video>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex justify-between'>
              <form className='bg-primary-50 flex gap-4 w-[40%] items center justify-between px-6 py-[14px] rounded'>
                <input className='bg-primary-50 rounded  outline-none placeholder:font-work placeholder:text-[18px]' type="email" placeholder='Enter email of the reciever' />
                <button className='bg-primary-300 text-white font-work px-[18px] py-[14px] rounded'>Send</button>
              </form>
              <form className='w-[55%] bg-[#fafafa] border border-solid border-gray-200 flex gap-4  items center justify-between px-6 py-[14px] rounded'>
                <input className=' bg-[#fafafa] rounded  outline-none placeholder:font-work placeholder:text-[18px] font-work text-[18px] text-text-grey' type="text" value='https://www.helpmeout/Untitled_Video_20232509'/>
                <button className='border border-solid border-primary-main flex gap-2 items-center text-primary-main font-work p-4 py-[14px] rounded'>
                    <BiCopy />
                    Copy url
                </button>
              </form>  
            </div>
        </div>
        <div>
            <h6>Share your video</h6>
            <button>
                <FaFacebook />
            </button>
        </div>
      </section>
    </main>
  )
}

export default Video