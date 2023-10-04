import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <section className=' mb-6 md:mb-20'>
      <header className=' mb-6 md:mb-[38px]'>
        <img className='pl-20 pt-20' src="/images/logo.svg" alt="logo" />
      </header>
      <article className='w-[90%] md:w-[475px] mx-auto flex flex-col gap-8 items-center'>
        <aside className='flex flex-col items-center gap-2'>
          <h4 className='font-sora text-[32px] font-bold'>Log in or Sign up</h4>
          <p className='font-work text-[14px] text-text-grey text-center'>Join millions of others in sharing successful<br></br> moves on HelpMeOut.</p>
        </aside>
        <aside className='flex flex-col w-full gap-6'>
          <button className='flex justify-center gap-4 items-center border rounded-lg border-text-header p-1'>
            <FcGoogle />
            <span className='p-4 font-work text-text-header font-medium'>Continue with Google</span>
          </button>
          <button className='flex justify-center gap-4 items-center border rounded-lg border-text-header p-4'>
            <FaFacebook className='text-blue-700'/>
            <span className='font-work text-text-header font-medium'>Continue with Facebook</span>
          </button>
          <div className='w-full flex items-center gap-3'>
            <div className='h-[1px] w-[50%] bg-text-grey'></div>
            <span className='text-text-grey'>or</span>
            <div className='h-[1px] w-[50%] bg-text-grey'></div>
          </div>
          <form className='flex flex-col w-full gap-4'>
            <label className='flex flex-col gap-2 font-work'>
              Email
              <input className='border p-4 rounded-lg outline-none text-text-grey font-work text-lg' type='email' value='user@example.com' />
            </label>
            <label className='flex flex-col gap-2 font-work'>
              Password
              <input className='border p-4 rounded-lg outline-none text-text-grey font-work text-lg' type="password" value="test1234" />
            </label>
            <Link to='/videos' className='px-5 py-4 font-work text-white bg-primary-main rounded-lg text-center'>Sign up</Link>
          </form>
        </aside>
      </article>
    </section>
  )
}

export default Auth