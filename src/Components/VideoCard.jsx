import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiLink2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const VideoCard = () => {
  return (
    <div className='rounded-lg border border-solid flex flex-col gap-6 border-gray-200 p-4 shadow w-[557px]'>
        <div className='w-full'>
            <video className='w-full rounded-lg' src="" controls ></video>
        </div>
        <Link to='/videos/:id' className='flex justify-between'>
            <div className='flex flex-col items-start'>
                <h5 className='font-work font-medium text-[20px]'>How To Create a Facebook Ad Listing</h5>
                <span className='font-work text-primary-100 '>SEPTEMBER 23, 2023</span>
            </div>
            <div className='flex items-start gap-6'>
              <FiLink2 className='h-6 w-6' />
              <BsThreeDotsVertical className='h-6 w-6' />  
            </div>
        </Link>
    </div>
  )
}

export default VideoCard